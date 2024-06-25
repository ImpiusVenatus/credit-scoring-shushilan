import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { IncomingForm, Files } from 'formidable';
import fs from 'fs';
import { parse } from 'csv-parse';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir: './uploads',
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files: Files) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const file = files.file;
      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const uploadedFile = Array.isArray(file) ? file[0] : file;
      const filePath = uploadedFile.filepath;

      fs.readFile(filePath, (err, data) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        parse(data, { columns: true }, (err, records) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }

          console.log(records);
          res.status(200).json({ data: records });
        });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

import { motion } from 'framer-motion';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 60, color = '#14b8a6' }) => {
  const arcLength = size / 10;

  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        className="spinner"
        style={{
          width: size,
          height: size,
          border: `4px solid transparent`,
          borderBottom: `${arcLength}px solid ${color}`,
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default Spinner;

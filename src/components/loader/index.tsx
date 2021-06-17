import { motion } from "framer-motion";
import { ILoaderProps } from "interfaces/ui";
import { StyledLoader, Path, PathLoader } from "./styles";
import {
  loaderVariants,
  statusVariantsFirst,
  statusVariantsSecond,
  statusVariantsThird,
} from "./variants";

export function Loader({ type }: ILoaderProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <StyledLoader
        initial={"pending"}
        animate={type}
        variants={loaderVariants}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <Path variants={statusVariantsFirst} />
          <Path variants={statusVariantsSecond} />
          <PathLoader variants={statusVariantsThird} />
        </svg>
      </StyledLoader>
    </motion.div>
  );
}

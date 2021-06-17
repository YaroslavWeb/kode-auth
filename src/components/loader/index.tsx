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
    <StyledLoader initial={"pending"} animate={type} variants={loaderVariants}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path variants={statusVariantsFirst} />
        <Path variants={statusVariantsSecond} />
        <PathLoader variants={statusVariantsThird} />
      </svg>
    </StyledLoader>
  );
}

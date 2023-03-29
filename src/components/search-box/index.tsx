import Svg from '@/components/svg';
import ToolTips from '@/components/tooltips';
import { SearchBoxWrapper } from './styles';

interface SearchBoxProps {
  placeholder: string;
  value: any;
  onChange?(arg: any): void;
  onClick?(arg: any): void;
  onFocus?(arg: any): void;
  onBlur?(arg: any): void;
}

export default function SearchBox({
  placeholder,
  value,
  onChange,
  onClick,
  onFocus,
  onBlur,
}: SearchBoxProps) {
  return (
    <SearchBoxWrapper>
      {value ? (
        <ToolTips position="top" content="Clear" height={34} offset={10}>
          <Svg
            src="/assets/icons/clear.svg"
            onClick={onClick}
            size={38}
            color="var(--darkBlue)"
            cursor="pointer"
          />
        </ToolTips>
      ) : (
        <Svg src="/assets/icons/search.svg" size={38} color="var(--darkBlue)" />
      )}
      <input
        autoFocus
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </SearchBoxWrapper>
  );
}

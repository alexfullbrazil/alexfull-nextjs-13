import ToolTips from '@/components/tooltips';
import { SearchBoxWrapper } from './styles';
import Svg from '@/components/svg';

interface SearchProps {
  placeholder: string;
  value: any;
  onChange?(arg: any): void;
  onClick?(arg: any): void;
  onFocus?(arg: any): void;
  onBlur?(arg: any): void;
}

export default function Search({
  placeholder,
  onChange,
  onClick,
  onFocus,
  onBlur,
  value,
}: SearchProps) {
  return (
    <SearchBoxWrapper>
      {value ? (
        <ToolTips position="left" content="Clear" height={24} offset={-10}>
          <Svg
            src="/assets/icons/clear.svg"
            onClick={onClick}
            size={24}
            cursor="pointer"
          />
        </ToolTips>
      ) : (
        <Svg src="/assets/icons/search.svg" size={24} />
      )}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </SearchBoxWrapper>
  );
}

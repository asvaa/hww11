import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type OptionType = {
  id: number | string;
  value: string;
};

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: OptionType[];
  onChangeOption?: (option: OptionType) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: JSX.Element[] = options
    ? options.map((o) => (
        <option
          id={"hw7-option-" + o.id}
          className={s.option}
          key={o.id}
          value={o.id}
        >
          {o.value}
        </option>
      ))
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
    const selectedId = e.currentTarget.value;
    const selectedOption = options?.find((o) => o.id.toString() === selectedId);
    if (selectedOption && onChangeOption) {
      onChangeOption(selectedOption);
    }
  };

  const finalSelectClassName = s.select + (className ? " " + className : "");

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      value={restProps.value}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;

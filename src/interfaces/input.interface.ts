export interface IInput {
  type?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  label: string;
}

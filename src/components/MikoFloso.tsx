import React, { ChangeEvent, useState, FC } from "react";

export interface Props {
  name?: string;
  age?: number;
}
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
enum HairColor {
  Blonde = "Your hair is blonde",
  Brown = "Your hair is brownj",
}

const MikoFloso: FC<Props> = ({ name, age }) => {
  const [country, setCountry] = useState<string | null>(null);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <input
        placeholder="write down ur country"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCountry(e.target.value)
        }
      />
      <p>{country}</p>
    </div>
  );
};

export default MikoFloso;

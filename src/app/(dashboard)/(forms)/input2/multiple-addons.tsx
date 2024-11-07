"use client";

import { Input } from "@/src/components/ui/input";
import { InputGroup, InputGroupText } from "@/src/components/ui/input-group";

const MultipleAddons = () => {
  return (
    <>
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <Input type="text" placeholder="100" />
        <InputGroupText>00</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText>$</InputGroupText>
        <Input type="text" placeholder="100" />
        <InputGroupText>00</InputGroupText>
      </InputGroup>
    </>
  );
};

export default MultipleAddons;

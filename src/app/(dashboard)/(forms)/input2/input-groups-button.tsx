"use client";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Icon } from "@iconify/react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from "@/src/components/ui/input-group";

const InputGroupsButton = () => {
  return (
    <>
      <InputGroup>
        <InputGroupButton>
          <Button color="primary" size="sm">
            <Icon icon="heroicons:magnifying-glass" />
          </Button>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Search.." />
        <InputGroupButton>
          <Button size="sm">
            <Icon icon="heroicons:magnifying-glass" />
          </Button>
        </InputGroupButton>
      </InputGroup>

      <InputGroup>
        <InputGroupButton>
          <Button size="sm">Search</Button>
        </InputGroupButton>
        <Input type="text" placeholder="Search.." />
        <InputGroupText>
          <Icon icon="heroicons:magnifying-glass" />
        </InputGroupText>
      </InputGroup>
    </>
  );
};

export default InputGroupsButton;

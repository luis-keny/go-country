import Select from '@heroui/';

export function Select() {
  return (
    <Select
      className="max-w-xs"
      label="Favorite Animal"
      placeholder="Select an animal"
      variant={variant}
    >
      {animals.map((animal) => (
        <SelectItem key={animal.key}>{animal.label}</SelectItem>
      ))}
    </Select>
  );
}

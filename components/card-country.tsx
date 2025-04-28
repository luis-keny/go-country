import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Country } from "@/types/country";

interface CardCountryProps {
  country: Country;
  flag: string;
}

export function CardCountry({ country, flag }: CardCountryProps) {
  const getLanguages = (languages: Object) => {
    const languagesList = Object.values(languages).map((lang: string) => lang).join(', ');
    return languagesList.length > 20 ? languagesList.slice(0, 20) + '...' : languagesList;
  }

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={flag}
          />
          <div className="flex flex-col gap-1 items-start justify-center overflow-hidden">
            <h4 className="text-small font-semibold leading-none text-default-600">{country.name.common}</h4>
            <h5 className="text-small tracking-tight text-default-400 truncate">{country.name.official}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 pb-1">
        <span><strong>Currency: </strong>{country.currencies ? Object.keys(country.currencies)[0] : 'N/A'}</span>
        <span><strong>Region: </strong>{country.region}</span>
        <span><strong>Subregion: </strong>{country.subregion}</span>
        <span><strong>Languages: </strong>{country.languages ? getLanguages(country.languages) : 'N/A'}</span>
      </CardBody>
    </Card>
  )
}
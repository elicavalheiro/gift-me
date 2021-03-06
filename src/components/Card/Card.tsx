import { Badge } from '../Badge/Badge';
import { Checkbox } from '../Checkbox/Checkbox';
import * as S from './Card.styles';

type Badge = {
  id: number;
  name: string;
};

type CardProps = {
  title: string;
  imageUrl?: string;
  link?: string;
  description: string;
  badges?: Badge[];
  price?: string;
};

export const Card = ({
  title,
  imageUrl,
  link,
  description,
  badges,
  price,
}: CardProps): JSX.Element => (
  <S.CardContainer>
    <S.CardImage src={imageUrl} />
    <S.CardContentWrapper>
      <S.CardHeader>
        <h2>{title}</h2>
        <a href={link}>Link</a>
      </S.CardHeader>
      <S.CardContent>{description}</S.CardContent>
      <S.CardBadges>
        {badges?.map((badge) => (
          <Badge key={badge.id} colorId={badge.id}>
            {badge.name}
          </Badge>
        ))}
      </S.CardBadges>
      <S.CardFooter>
        <Checkbox>Acquired</Checkbox>
        <S.CardPrice
          value={price}
          displayType="text"
          prefix="R$"
          thousandSeparator="."
          decimalSeparator=","
        />
      </S.CardFooter>
    </S.CardContentWrapper>
  </S.CardContainer>
);

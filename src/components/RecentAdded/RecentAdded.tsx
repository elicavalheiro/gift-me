import { Card } from '../Card/Card';
import * as S from './RecentAdded.styles';

export const RecentAdded = (): JSX.Element => (
  <S.RecentAddedContainer>
    <Card
      title="NOTEBOOK"
      description="Notebook Acer 17”, SSD 512GB, 16GB de RAM, Placa de vídeo GTX 1650 Super"
      imageUrl="https://source.unsplash.com/1600x900/?computer"
      badges={[
        {
          name: 'home-office',
          id: 1,
        },
        {
          name: 'eletronics',
          id: 2,
        },
      ]}
      price="2900"
    />
    <Card
      title="NOTEBOOK"
      description="Notebook Acer 17”, SSD 512GB, 16GB de RAM, Placa de vídeo GTX 1650 Super"
      imageUrl="https://source.unsplash.com/1600x900/?computer"
      badges={[
        {
          name: 'home-office',
          id: 1,
        },
        {
          name: 'eletronics',
          id: 2,
        },
      ]}
      price="2900"
    />
    <Card
      title="NOTEBOOK"
      description="Notebook Acer 17”, SSD 512GB, 16GB de RAM, Placa de vídeo GTX 1650 Super"
      imageUrl="https://source.unsplash.com/1600x900/?computer"
      badges={[
        {
          name: 'home-office',
          id: 1,
        },
        {
          name: 'eletronics',
          id: 2,
        },
      ]}
    />
  </S.RecentAddedContainer>
);

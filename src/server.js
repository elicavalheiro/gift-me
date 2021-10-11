import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      gift: Model,
      category: Model,
    },

    seeds(server) {
      server.create('gift', {
        title: 'Notebook',
        description:
          'Notebook Acer 17”, SSD 512GB, 16GB de RAM, Placa de vídeo GTX 1650 Super',
        price: 4999,
        link: 'www.google.com.br',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80',
        categories: ['1'],
      });

      server.create('category', {
        name: 'Electronics',
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/gifts', (schema) => schema.gifts.all());

      this.get('/categories', (schema) => schema.categories.all());
    },
  });

  return server;
}

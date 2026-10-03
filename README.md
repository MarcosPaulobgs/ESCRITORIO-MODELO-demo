# Site — Escritório Modelo Advogados

## Estrutura

```
escritorio-modelo-site/
├── index.html          → Página inicial
├── contato.html        → Página de contato (formulário)
├── css/
│   └── style.css       → Todo o CSS do site (as duas páginas usam o mesmo arquivo)
├── js/
│   ├── main.js          → Script compartilhado (menu mobile, ano do rodapé, animação de rolagem)
│   └── contato.js       → Script exclusivo da página de contato (envia o formulário pro WhatsApp)
└── img/                 → Coloque aqui as fotos do site (veja a lista abaixo)
```

## Imagens que faltam adicionar na pasta `img/`

Coloque os arquivos com **exatamente estes nomes** dentro da pasta `img/`:

| Nome do arquivo   | Onde aparece                          | Indicação de enquadramento |
|--------------------|----------------------------------------|------------------------------|
| `hero.webp`        | Fundo da seção inicial (Hero)          | Foto vertical, da cintura para cima, rosto no terço superior — vai ficar com um degradê escuro por cima |
| `sobre.webp`        | Seção "Sobre" (retrato de escritório)  | Foto vertical (proporção 4:5), pode ser mais próxima e menos escurecida — é onde o rosto tem mais destaque |

Se as imagens tiverem outra extensão (`.jpg`, `.png` etc.), é só ajustar a extensão no `src` da tag `<img>` correspondente em `index.html`, ou renomear o próprio arquivo para `.webp` antes de colocar na pasta.

## O que ainda não está ligado a imagens

- **Logo**: por enquanto o cabeçalho usa o nome do escritório em texto (fonte cursiva), não a logo em arquivo. Quando quiser usar a logo de verdade, me avisa que eu ajusto o `<header>` das duas páginas.

## Contatos (genéricos)

Nesta versão (portfólio) todos os contatos são de exemplo, para não expor dados reais:
- WhatsApp: `(00) 00000-0000` (link `https://wa.me/5500000000000`, número inválido de propósito)
- E-mail: `contato@example.com`
- Instagram: `@seuperfil` (o link abre o Instagram, sem perfil específico)

Aparecem em `index.html` (rodapé e seção "Instagram") e em `contato.html` (linha abaixo do formulário). O envio do formulário fica desativado enquanto `WHATSAPP_NUMERO` estiver vazio em `js/contato.js`; para ativar, coloque o número (só dígitos, com 55 + DDD) nessa variável.

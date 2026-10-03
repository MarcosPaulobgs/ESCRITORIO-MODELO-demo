// Script exclusivo da página de contato (contato.html)
// Envia os dados preenchidos no formulário para o WhatsApp do escritório

document.addEventListener('DOMContentLoaded', function () {

  // Número do escritório (apenas dígitos, com 55 + DDD). Deixado em branco de propósito:
  // nesta versão (portfólio) o envio para o WhatsApp fica desativado.
  var WHATSAPP_NUMERO = '';

  var form = document.getElementById('contatoForm');
  var status = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nome = document.getElementById('nome').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !telefone) {
      status.textContent = 'Preencha nome e WhatsApp para continuar.';
      return;
    }

    // Mensagem organizada, com formatação do WhatsApp (*negrito*) e quebras de linha
    var linhas = [
      'Olá! Vim pelo site e gostaria de atendimento.',
      '',
      '*Nome:* ' + nome,
      '*WhatsApp:* ' + telefone,
      '*Área de interesse:* ' + assunto
    ];
    if (mensagem) {
      linhas.push('', '*Resumo do caso:*', mensagem);
    }
    var texto = linhas.join('\n');
    if (!WHATSAPP_NUMERO) {
      status.textContent = 'Versão de demonstração: o envio para o WhatsApp está desativado.';
      return;
    }

    var link = 'https://wa.me/' + WHATSAPP_NUMERO + '?text=' + encodeURIComponent(texto);

    status.textContent = 'Abrindo o WhatsApp...';
    window.open(link, '_blank');
  });

});

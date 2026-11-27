
(function () {
  const c = config;
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);
  const r = document.documentElement.style;

  r.setProperty('--marinho', c.cores.marinho);
  r.setProperty('--prata', c.cores.prata);
  r.setProperty('--cinza', c.cores.cinza);
  r.setProperty('--branco', c.cores.branco);

  document.title = c.nomeBarbearia;

  const logo = $('.logo');
  if (logo) {
    logo.textContent = c.nomeBarbearia;
  }

  const bg = (el, url) => {
    if (el && url) el.style.backgroundImage = `url("${url}")`;
  };

  bg($('#heroImg'), c.fotos.hero);
  bg($('#sobreImg'), c.fotos.sobre);

  const telefone = c.whatsappNumber;
  const whatsapp = texto =>
    `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

  $$('.nomeBarbearia').forEach(el => {
    el.textContent = c.nomeBarbearia;
  });

  $$('.endereco').forEach(el => {
    el.textContent = c.endereco;
  });

  $$('.horario').forEach(el => {
    el.textContent = c.horario;
  });

  $$('.instagram').forEach(el => {
    el.href = c.instagram;
  });

  $$('.mapsUrl').forEach(el => {
    el.href = c.mapsUrl;
  });

  $$('.whatsapp').forEach(el => {
    el.href = whatsapp('Olá! Gostaria de informações.');
    el.target = '_blank';
  });

  const servGrid = $('#servGrid');

  if (servGrid) {
    servGrid.innerHTML = c.servicos.map(s => `
      <article class="serv-card">
        ${s.foto ? `<img src="${s.foto}" alt="${s.nome}" loading="lazy">` : ''}
        <div class="serv-info">
          <h3>${s.nome}</h3>
          <p>${s.desc}</p>
          <strong>${s.preco}</strong>
          <a href="${whatsapp('Olá! Gostaria de agendar: ' + s.nome)}" target="_blank">
            Agendar pelo WhatsApp
          </a>
        </div>
      </article>
    `).join('');
  }

  const galGrid = $('#galGrid');

  if (galGrid) {
    galGrid.innerHTML = c.galeria.map(g => `
      <article class="gal-card">
        <img src="${g.foto}" alt="${g.titulo}" loading="lazy">
        <h3>${g.titulo}</h3>
      </article>
    `).join('');
  }

  const avGrid = $('#avGrid');

  if (avGrid) {
    avGrid.innerHTML = c.avaliacoes.map(a => `
      <article class="av-card">
        <p>"${a.texto}"</p>
        <strong>${a.nome}</strong>
      </article>
    `).join('');
  }

  const form = $('form');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const dados = new FormData(form);
      const mensagem = [
        'Olá! Gostaria de agendar um horário.',
        ...[...dados.entries()].map(([k, v]) => `${k}: ${v}`)
      ].join('\n');

      window.open(whatsapp(mensagem), '_blank');
    });
  }

  const menuBtn = $('.menu-btn');
  const nav = $('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  $$('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('active');
    });
  });

  const reveal = $$('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    reveal.forEach(el => observer.observe(el));
  } else {
    reveal.forEach(el => el.classList.add('visible'));
  }
})();

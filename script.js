(function(){
const c=config,$=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const r=document.documentElement.style;
r.setProperty('--marinho',c.cores.marinho);r.setProperty('--prata',c.cores.prata);r.setProperty('--cinza',c.cores.cinza);r.setProperty('--branco',c.cores.branco);
document.title=c.nomeBarbearia+" — Barbearia";
const wa=m=>`https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(m)}`;
const tel=n=>{const d=n.replace(/\D/g,'').replace(/^55/,'');return d.length>=10?`(${d.slice(0,2)}) ${d.slice(2,d.length-4)}-${d.slice(-4)}`:n};
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const icon='<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/></svg>';
const bg=(el,url)=>{if(url){el.style.backgroundImage=`url("${url}")`;const i=new Image();i.onerror=()=>{el.style.backgroundImage='';el.classList.add('ph')};i.src=url}else el.classList.add('ph')};
const foto=u=>`<div class="foto${u?'':' ph'}" ${u?`style="background-image:url('${esc(u)}')"`:''}>${u?'':icon}</div>`;

// Marca, contatos
const nome=c.nomeBarbearia,sp=nome.indexOf(' ');
$$('[data-logo]').forEach(e=>e.innerHTML=c.logo?`<img src="${esc(c.logo)}" alt="${esc(nome)}">`:(sp>0?`${esc(nome.slice(0,sp))} <b>${esc(nome.slice(sp+1))}</b>`:esc(nome)));
$$('[data-nome]').forEach(e=>e.textContent=nome);
$$('[data-end]').forEach(e=>e.textContent=c.endereco);
$$('[data-hor]').forEach(e=>e.textContent=c.horario);
$$('[data-tel]').forEach(e=>e.textContent=tel(c.whatsappNumber));
$$('[data-insta]').forEach(e=>e.href=c.instagram);
$$('[data-maps]').forEach(e=>e.href=c.mapsUrl);
$('#ano').textContent=new Date().getFullYear();
bg($('#heroImg'),c.fotos.hero);bg($('#sobreImg'),c.fotos.sobre);

// WhatsApp (todos os botões usam config.whatsappNumber)
$$('.wa-link').forEach(a=>{a.href=wa(a.dataset.msg);a.target='_blank';a.rel='noopener'});

// Serviços
$('#servGrid').innerHTML=c.servicos.map((s,i)=>`<article class="card reveal">${foto(s.foto)}<div class="body"><h3>${esc(s.nome)}</h3><p>${esc(s.desc)}</p><div class="preco"><b>${esc(s.preco)}</b><a href="#" class="btn small wa-s" style="margin:0" data-i="${i}">AGENDAR</a></div></div></article>`).join('');
$$('.wa-s').forEach(a=>{const s=c.servicos[a.dataset.i];a.href=wa(`Olá! Gostaria de agendar um horário.\n\nServiço: ${s.nome}\n\nPoderia me informar a disponibilidade?`);a.target='_blank';a.rel='noopener'});
$('#fServs').innerHTML=c.servicos.map(s=>`<a href="#servicos">${esc(s.nome)}</a>`).join('');

// Galeria, avaliações
$('#galGrid').innerHTML=c.galeria.map(g=>`<figure class="reveal">${foto(g.foto)}<figcaption>${esc(g.titulo)}</figcaption></figure>`).join('');
$('#avGrid').innerHTML=c.avaliacoes.map(a=>`<div class="card reveal" style="padding:24px"><div class="stars">★★★★★</div><p>“${esc(a.texto)}”</p><h3 style="margin-top:14px;font-size:1rem">${esc(a.nome)}</h3></div>`).join('');

// Formulário
$('#fServ').innerHTML='<option value="">Escolha o serviço</option>'+c.servicos.map(s=>`<option>${esc(s.nome)}</option>`).join('');
let h='<option value="">Escolha o horário</option>';
for(let m=c.horarioInicio*60;m<c.horarioFim*60;m+=30){const t=`${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;h+=`<option>${t}</option>`}
$('#fHora').innerHTML=h;
const hoje=new Date(),iso=new Date(hoje.getTime()-hoje.getTimezoneOffset()*6e4).toISOString().slice(0,10);
$('#fData').min=iso;
$$('.wa-s').forEach(a=>a.addEventListener('click',()=>{$('#fServ').value=c.servicos[a.dataset.i].nome}));
$('#form').addEventListener('submit',e=>{
  e.preventDefault();
  const n=$('#fNome').value.trim(),s=$('#fServ').value,d=$('#fData').value,hr=$('#fHora').value,er=$('#erro');
  let msg='';
  if(!s)msg='Escolha o serviço.';else if(n.length<2)msg='Informe seu nome.';else if(!d||d<iso)msg='Escolha uma data válida.';else if(!hr)msg='Escolha o horário desejado.';
  er.style.display=msg?'block':'none';er.textContent=msg;if(msg)return;
  const [y,mo,da]=d.split('-');
  const texto=`Olá! Gostaria de agendar um horário.\n\nNome: ${n}\nServiço: ${s}\nData: ${da}/${mo}\nHorário desejado: ${hr}\n\nGostaria de confirmar a disponibilidade.`;
  window.open(wa(texto),'_blank','noopener');
});

// Menu mobile
const b=$('#burger'),nav=$('#menu');
const fecha=()=>{nav.classList.remove('open');b.classList.remove('on');b.setAttribute('aria-expanded','false')};
b.addEventListener('click',()=>{const o=nav.classList.toggle('open');b.classList.toggle('on',o);b.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',fecha));

// Animações ao rolar
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
$$('.reveal').forEach(e=>io.observe(e));
})();

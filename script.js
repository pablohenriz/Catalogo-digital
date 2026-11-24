(function () {
     // Número da loja com DDI+DDD (ex.: 5511988887777). Também pode ser informado no rodapé da página.
     var WHATSAPP_LOJA = '';
     var STORE_NAME = 'Mini Kids';

     var $ = function (s) { return document.querySelector(s); };
     var fmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
     var money = function (n) { return fmt.format(n).replace(/ /g, ' '); };
     var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };

     var COLORS = { amarelo: '#FFD21F', laranja: '#FB8C2B', vermelho: '#E5484D', rosa: '#F472B6', 'lilás': '#A78BFA', azul: '#2F6FDE', verde: '#2FA561', branco: '#F6F5EF', preto: '#24241F' };
     var KID = ['2', '4', '6', '8', '10', '12'];
     var BABY = ['RN', 'P', 'M', 'G'];
     var SIZE_ORDER = ['RN', 'P', 'M', 'G', '2', '4', '6', '8', '10', '12', 'Único'];
     var CATS = ['Todos', 'Meninas', 'Meninos', 'Bebê', 'Acessórios'];

     var SHAPES = {
          tee: { d: 'M30 16 L14 28 L23 42 L32 36 L32 84 L68 84 L68 36 L77 42 L86 28 L70 16 Q50 32 30 16 Z', det: '' },
          dress: { d: 'M38 12 L45 12 Q50 22 55 12 L62 12 L65 38 L86 86 L14 86 L35 38 Z', det: 'M36 42 H64' },
          shorts: { d: 'M24 22 L76 22 L83 80 L55 80 L50 50 L45 80 L17 80 Z', det: 'M24 30 H76' },
          pants: { d: 'M30 12 L70 12 L75 90 L55 90 L50 38 L45 90 L25 90 Z', det: 'M30 20 H70' },
          hoodie: { d: 'M33 20 L12 64 L24 70 L34 50 L34 86 L66 86 L66 50 L76 70 L88 64 L67 20 Q50 40 33 20 Z', det: 'M42 64 H58 M44 40 V54 M56 40 V54' },
          romper: { d: 'M36 12 L44 12 Q50 22 56 12 L64 12 L71 34 L65 38 L65 58 L74 90 L54 90 L50 68 L46 90 L26 90 L35 58 L35 38 L29 34 Z', det: 'M44 40 H56' },
          cap: { d: 'M16 64 Q16 26 52 26 Q82 26 84 58 L96 62 Q92 72 70 68 L16 68 Z', det: 'M52 26 V60' },
          sock: { d: 'M38 10 L62 10 L62 54 L84 68 Q90 82 76 86 L48 86 Q34 84 38 70 Z', det: 'M38 22 H62' }
     };

     var P = [
          { id: 'vestido-margarida', name: 'Vestido Margarida', cat: ['Meninas'], price: 79.9, shape: 'dress', colors: ['rosa', 'amarelo', 'branco'], sizes: KID.slice(0, 5) },
          { id: 'blusa-laco', name: 'Blusa Laço', cat: ['Meninas'], price: 39.9, shape: 'tee', colors: ['rosa', 'branco', 'lilás'], sizes: KID.slice(1) },
          { id: 'short-jeans', name: 'Short Jeans', cat: ['Meninas'], price: 49.9, shape: 'shorts', colors: ['azul', 'rosa'], sizes: KID.slice(1) },
          { id: 'camiseta-dino', name: 'Camiseta Dino', cat: ['Meninos'], price: 44.9, shape: 'tee', colors: ['verde', 'azul', 'amarelo'], sizes: KID.slice(0, 5) },
          { id: 'bermuda-cargo', name: 'Bermuda Cargo', cat: ['Meninos'], price: 59.9, shape: 'shorts', colors: ['verde', 'preto', 'azul'], sizes: KID.slice(1) },
          { id: 'calca-jogger', name: 'Calça Jogger', cat: ['Meninos'], price: 69.9, shape: 'pants', colors: ['preto', 'azul', 'vermelho'], sizes: KID.slice(1) },
          { id: 'moletom-capuz', name: 'Moletom com Capuz', cat: ['Meninos', 'Meninas'], price: 99.9, shape: 'hoodie', colors: ['azul', 'vermelho', 'preto', 'rosa'], sizes: KID.slice(1) },
          { id: 'jaqueta-corta-vento', name: 'Jaqueta Corta-vento', cat: ['Meninos', 'Meninas'], price: 119.9, shape: 'hoodie', colors: ['laranja', 'azul', 'verde'], sizes: KID.slice(1) },
          { id: 'macacao-soneca', name: 'Macacão Soneca', cat: ['Bebê'], price: 64.9, shape: 'romper', colors: ['amarelo', 'branco', 'verde'], sizes: BABY },
          { id: 'body-manga-curta', name: 'Body Manga Curta', cat: ['Bebê'], price: 34.9, shape: 'tee', colors: ['branco', 'rosa', 'azul'], sizes: BABY },
          { id: 'conjunto-ursinho', name: 'Conjunto Ursinho', cat: ['Bebê'], price: 89.9, shape: 'hoodie', colors: ['amarelo', 'azul'], sizes: BABY.slice(1) },
          { id: 'bone-aba-curva', name: 'Boné Aba Curva', cat: ['Acessórios'], price: 29.9, shape: 'cap', colors: ['vermelho', 'azul', 'preto'], sizes: ['Único'] },
          { id: 'chapeu-bucket', name: 'Chapéu Bucket', cat: ['Acessórios'], price: 34.9, shape: 'cap', colors: ['verde', 'laranja', 'amarelo'], sizes: ['Único'] },
          { id: 'kit-meias', name: 'Kit 3 Meias', cat: ['Acessórios'], price: 24.9, shape: 'sock', colors: ['branco', 'preto', 'rosa'], sizes: ['P', 'M', 'G'] }
     ];
     var BY = {};
     P.forEach(function (p) { BY[p.id] = p; });

     var ALL_COLORS = Object.keys(COLORS).filter(function (c) { return P.some(function (p) { return p.colors.indexOf(c) > -1; }); });
     var ALL_SIZES = SIZE_ORDER.filter(function (s) { return P.some(function (p) { return p.sizes.indexOf(s) > -1; }); });

     var state = { cat: 'Todos', color: null, size: null };
     var sel = {};
     P.forEach(function (p) { sel[p.id] = { color: p.colors[0], size: null }; });
     var cart = [];

     function keepFocus(fn) {
          var a = document.activeElement;
          var k = a && a.dataset ? a.dataset.f : null;
          fn();
          if (k) {
               var n = document.querySelector('[data-f="' + CSS.escape(k) + '"]');
               if (n && !n.disabled) n.focus();
          }
     }

     /* ---------- filtros e grade ---------- */
     function renderFilters() {
          $('#cats').innerHTML = CATS.map(function (c) {
               return '<button class="pill" data-act="cat" data-v="' + c + '" data-f="cat-' + c + '" aria-pressed="' + (state.cat === c) + '">' + c + '</button>';
          }).join('');
          $('#fcolors').innerHTML = ALL_COLORS.map(function (c) {
               return '<button class="sw" style="--c:' + COLORS[c] + '" data-act="fcolor" data-v="' + c + '" data-f="fc-' + c + '" aria-pressed="' + (state.color === c) + '" aria-label="' + cap(c) + '" title="' + cap(c) + '"></button>';
          }).join('');
          $('#fsizes').innerHTML = ALL_SIZES.map(function (s) {
               return '<button class="chip" data-act="fsize" data-v="' + s + '" data-f="fs-' + s + '" aria-pressed="' + (state.size === s) + '">' + s + '</button>';
          }).join('');
          $('#clear').hidden = !(state.cat !== 'Todos' || state.color || state.size);
     }

     function visible() {
          return P.filter(function (p) {
               return (state.cat === 'Todos' || p.cat.indexOf(state.cat) > -1) &&
                    (!state.color || p.colors.indexOf(state.color) > -1) &&
                    (!state.size || p.sizes.indexOf(state.size) > -1);
          });
     }

     function cardInner(p) {
          var s = sel[p.id], sh = SHAPES[p.shape];
          var sws = p.colors.map(function (c) {
               return '<button class="sw" style="--c:' + COLORS[c] + '" data-act="pcolor" data-p="' + p.id + '" data-v="' + c + '" data-f="' + p.id + '|c|' + c + '" aria-pressed="' + (s.color === c) + '" aria-label="' + cap(c) + '"></button>';
          }).join('');
          var sizes = p.sizes.map(function (z) {
               return '<button class="chip" data-act="psize" data-p="' + p.id + '" data-v="' + z + '" data-f="' + p.id + '|s|' + z + '" aria-pressed="' + (s.size === z) + '">' + z + '</button>';
          }).join('');
          return '<div class="art" style="--c:' + COLORS[s.color] + '"><svg viewBox="0 0 100 100" aria-hidden="true"><path class="body" d="' + sh.d + '"/>' + (sh.det ? '<path class="det" d="' + sh.det + '"/>' : '') + '</svg></div>' +
               '<h3 class="pname">' + p.name + '</h3>' +
               '<p class="price">' + money(p.price) + '</p>' +
               '<div class="sws" role="group" aria-label="Cor">' + sws + '</div>' +
               '<p class="cname">' + cap(s.color) + '</p>' +
               '<div class="sizes" role="group" aria-label="Tamanho">' + sizes + '</div>' +
               '<button class="add" data-act="add" data-p="' + p.id + '" data-f="' + p.id + '|add"' + (s.size ? '' : ' disabled') + '>' + (s.size ? 'Adicionar · tam ' + s.size : 'Escolha o tamanho') + '</button>';
     }

     function renderGrid() {
          var list = visible();
          $('#count').textContent = list.length + (list.length === 1 ? ' produto' : ' produtos');
          $('#grid').innerHTML = list.length
               ? list.map(function (p) { return '<article class="card" data-card="' + p.id + '">' + cardInner(p) + '</article>'; }).join('')
               : '<div class="empty"><p>Nenhum produto com esses filtros.</p><button class="pill" data-act="clear">Limpar filtros</button></div>';
     }

     function renderCard(id) {
          keepFocus(function () {
               var el = document.querySelector('[data-card="' + id + '"]');
               if (el) el.innerHTML = cardInner(BY[id]);
          });
     }

     function applyFilterToSel() {
          P.forEach(function (p) {
               if (state.color && p.colors.indexOf(state.color) > -1) sel[p.id].color = state.color;
               if (state.size && p.sizes.indexOf(state.size) > -1) sel[p.id].size = state.size;
          });
     }

     function refresh() { keepFocus(function () { renderFilters(); renderGrid(); }); }

     /* ---------- carrinho ---------- */
     function total() { return cart.reduce(function (t, i) { return t + BY[i.id].price * i.qty; }, 0); }
     function count() { return cart.reduce(function (t, i) { return t + i.qty; }, 0); }

     function renderBar() {
          var n = count();
          $('#bar').hidden = !n;
          $('#bcount').textContent = 'Ver carrinho (' + n + ')';
          $('#btotal').textContent = money(total());
     }

     function renderCart() {
          if (!cart.length) { closeCart(); return; }
          keepFocus(function () {
               $('#items').innerHTML = cart.map(function (i, idx) {
                    var p = BY[i.id];
                    return '<li class="item"><div><p class="iname">' + p.name + '</p><p class="imeta">' + cap(i.color) + ' · Tam ' + i.size + ' · ' + money(p.price) + '</p></div>' +
                         '<p class="iprice">' + money(p.price * i.qty) + '</p>' +
                         '<div class="irow"><div class="qty"><button data-act="dec" data-i="' + idx + '" data-f="dec-' + idx + '" aria-label="Diminuir quantidade">−</button><span>' + i.qty + '</span><button data-act="inc" data-i="' + idx + '" data-f="inc-' + idx + '" aria-label="Aumentar quantidade">+</button></div>' +
                         '<button class="link" data-act="del" data-i="' + idx + '" data-f="del-' + idx + '">Remover</button></div></li>';
               }).join('');
               $('#total').textContent = money(total());
          });
          updateSend();
     }

     function addToCart(id) {
          var s = sel[id];
          if (!s.size) return;
          var f = cart.find(function (i) { return i.id === id && i.color === s.color && i.size === s.size; });
          if (f) f.qty = Math.min(20, f.qty + 1); else cart.push({ id: id, color: s.color, size: s.size, qty: 1 });
          renderBar();
          toast('Adicionado ao carrinho');
     }

     var tt;
     function toast(t) {
          var el = $('#toast');
          el.textContent = t;
          el.classList.add('on');
          clearTimeout(tt);
          tt = setTimeout(function () { el.classList.remove('on'); }, 1800);
     }

     function openCart() {
          renderCart();
          if (!cart.length) return;
          $('#ov').hidden = false;
          document.documentElement.style.overflow = 'hidden';
          $('#close').focus();
     }
     function closeCart() {
          $('#ov').hidden = true;
          document.documentElement.style.overflow = '';
          renderBar();
          var b = $('#opencart');
          if (!$('#bar').hidden) b.focus();
     }

     /* ---------- pedido para o WhatsApp ---------- */
     var LS = 'mk-whats';
     var storeRaw = WHATSAPP_LOJA;
     try { storeRaw = localStorage.getItem(LS) || WHATSAPP_LOJA; } catch (e) { }
     function storeNum() {
          var d = storeRaw.replace(/\D/g, '');
          if (d.length === 10 || d.length === 11) d = '55' + d;
          return d.length >= 12 ? d : '';
     }
     function pay() { return document.querySelector('input[name="pay"]:checked').value; }

     function message() {
          var lines = [
               '*Novo pedido · ' + STORE_NAME + '*', '',
               '*Cliente:* ' + $('#cname').value.trim(),
               '*Telefone:* ' + $('#cphone').value,
               '*Pagamento:* ' + pay(), '',
               '*Itens*'
          ];
          cart.forEach(function (i) {
               var p = BY[i.id];
               lines.push(i.qty + 'x ' + p.name + ' · ' + cap(i.color) + ' · Tam ' + i.size + ' · ' + money(p.price * i.qty));
          });
          lines.push('', '*Total:* ' + money(total()));
          var o = $('#cobs').value.trim();
          if (o) lines.push('', '*Obs.:* ' + o);
          return lines.join('\n');
     }

     function missing() {
          var m = [];
          if (!cart.length) m.push('itens no carrinho');
          if ($('#cname').value.trim().length < 2) m.push('seu nome');
          if ($('#cphone').value.replace(/\D/g, '').length < 10) m.push('seu WhatsApp');
          if (!storeNum()) m.push('o WhatsApp da loja (rodapé da página)');
          return m;
     }

     function updateSend() {
          var m = missing(), a = $('#send'), h = $('#hint');
          h.className = 'hint';
          if (m.length) {
               a.setAttribute('aria-disabled', 'true');
               a.removeAttribute('href');
               h.textContent = 'Falta: ' + m.join(', ') + '.';
          } else {
               a.setAttribute('aria-disabled', 'false');
               a.href = 'https://wa.me/' + storeNum() + '?text=' + encodeURIComponent(message());
               h.textContent = 'O WhatsApp abre com o pedido pronto. Confirme o envio por lá.';
          }
     }

     /* ---------- eventos ---------- */
     document.addEventListener('click', function (e) {
          var t = e.target.closest('[data-act]');
          if (!t) { if (e.target === $('#ov')) closeCart(); return; }
          var act = t.dataset.act, v = t.dataset.v, id = t.dataset.p, i = +t.dataset.i;
          if (act === 'cat') { state.cat = v; refresh(); }
          else if (act === 'fcolor') { state.color = state.color === v ? null : v; applyFilterToSel(); refresh(); }
          else if (act === 'fsize') { state.size = state.size === v ? null : v; applyFilterToSel(); refresh(); }
          else if (act === 'clear') { state.cat = 'Todos'; state.color = null; state.size = null; refresh(); }
          else if (act === 'pcolor') { sel[id].color = v; renderCard(id); }
          else if (act === 'psize') { sel[id].size = sel[id].size === v ? null : v; renderCard(id); }
          else if (act === 'add') { addToCart(id); }
          else if (act === 'opencart') { openCart(); }
          else if (act === 'closecart') { closeCart(); }
          else if (act === 'inc') { cart[i].qty = Math.min(20, cart[i].qty + 1); renderBar(); renderCart(); }
          else if (act === 'dec') { cart[i].qty -= 1; if (cart[i].qty < 1) cart.splice(i, 1); renderBar(); renderCart(); }
          else if (act === 'del') { cart.splice(i, 1); renderBar(); renderCart(); }
     });

     document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && !$('#ov').hidden) closeCart();
     });

     $('#form').addEventListener('submit', function (e) { e.preventDefault(); });
     $('#form').addEventListener('input', updateSend);
     $('#form').addEventListener('change', updateSend);

     $('#cphone').addEventListener('input', function () {
          var d = this.value.replace(/\D/g, '').slice(0, 11), o = d;
          if (d.length > 10) o = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
          else if (d.length > 6) o = '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
          else if (d.length > 2) o = '(' + d.slice(0, 2) + ') ' + d.slice(2);
          this.value = o;
     });

     $('#store').value = storeRaw;
     $('#store').addEventListener('input', function () {
          storeRaw = this.value;
          try { localStorage.setItem(LS, storeRaw); } catch (e) { }
          updateSend();
     });

     $('#send').addEventListener('click', function (e) {
          if (this.getAttribute('aria-disabled') === 'true') {
               e.preventDefault();
               $('#hint').classList.add('warn');
          } else {
               $('#hint').textContent = 'Se o WhatsApp não abriu, toque de novo.';
          }
     });

     renderFilters();
     renderGrid();
     renderBar();
     updateSend();
})();

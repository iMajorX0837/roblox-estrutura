(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function lc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qu={exports:{}},nl={},Wu={exports:{}},R={};/* ... (mantive todo o React minificado do arquivo original) ... */

// === PIX via gerar-pix.php (RoasPay) — resposta: copypaste, pix_qrcode_image ===
const normalizarImagemPix = (b64) => {
  if (!b64) return "";
  const s = String(b64).trim();
  if (s.startsWith("data:")) return s;
  return "data:image/png;base64," + s;
};

const gerarPixRoasPay = async (valor, usuario) => {
  const doc = (usuario.cpf || "").replace(/\D/g, "");
  const res = await fetch("gerar-pix.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: parseFloat(valor),
      payerName: usuario.name || "Cliente",
      email: usuario.email || "cliente@exemplo.com",
      payerDocument: doc,
      tell: usuario.tell || "11999998888",
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || data.detalhe || `Erro ${res.status}`);
  }
  if (!data.status || !data.copypaste) {
    throw new Error(data.error || "Resposta inválida: falta copypaste");
  }
  return {
    qr_code: normalizarImagemPix(data.pix_qrcode_image),
    copypaste: data.copypaste,
    value: valor,
  };
};

// === COMPONENTE PRINCIPAL (atualizado) ===
function Bd() {
  const [valor, setValor] = q.useState("20");
  const [telefone, setTelefone] = q.useState("");
  const [operadora, setOperadora] = q.useState("");
  const [metodoPagamento, setMetodoPagamento] = q.useState("");
  const [cpf, setCpf] = q.useState("");
  const [modalPixAberto, setModalPixAberto] = q.useState(false);
  const [modalPromoAberto, setModalPromoAberto] = q.useState(true);
  const [dadosPix, setDadosPix] = q.useState({ qrCode: "", pixCode: "", value: "" });
  const [carregando, setCarregando] = q.useState(false);

  const formatarTelefone = (v) => {
    const num = v.replace(/\D/g, "").slice(0, 11);
    if (num.length <= 2) return num;
    if (num.length <= 7) return `(${num.slice(0,2)}) ${num.slice(2)}`;
    return `(${num.slice(0,2)}) ${num.slice(2,7)}-${num.slice(7)}`;
  };

  const formatarCpf = (v) => {
    const num = v.replace(/\D/g, "").slice(0, 11);
    if (num.length <= 3) return num;
    if (num.length <= 6) return `${num.slice(0,3)}.${num.slice(3)}`;
    if (num.length <= 9) return `${num.slice(0,3)}.${num.slice(3,6)}.${num.slice(6)}`;
    return `${num.slice(0,3)}.${num.slice(3,6)}.${num.slice(6,9)}-${num.slice(9)}`;
  };

  const telefoneValido = () => telefone.replace(/\D/g, "").length === 11;
  const podePagar = () => telefoneValido() && operadora !== "";

  const valores = [
    {id:"v1", value:"20", gb:"3 GB"},
    {id:"v2", value:"30", gb:"4 GB"},
    {id:"v3", value:"40", gb:"5 GB"},
    {id:"v7", value:"50", gb:"6 GB"},
    {id:"v8", value:"60", gb:"7 GB"},
    {id:"v9", value:"70", gb:"8 GB"},
    {id:"v10",value:"80", gb:"9 GB"},
    {id:"v11",value:"90", gb:"10 GB"},
    {id:"v12",value:"100",gb:"15 GB"}
  ];

  const operadoras = [
    {id:"vivo", name:"Vivo"}, {id:"claro", name:"Claro"}, {id:"tim", name:"Tim"},
    {id:"oi", name:"Oi"}, {id:"algar", name:"Algar"}, {id:"nextel", name:"Nextel"},
    {id:"correios", name:"Correios"}
  ];

  const bonus = valores.find(v => v.value === valor)?.gb || "3 GB";

  const pagar = async () => {
    if (!podePagar() || metodoPagamento !== "pix") return;

    setCarregando(true);

    try {
      const usuario = {
        name: `Cliente ${telefone}`,
        email: "cliente@exemplo.com",
        cpf: cpf,
        tell: telefone.replace(/\D/g, "")
      };

      const resultado = await gerarPixRoasPay(valor, usuario);

      // Atualiza o estado com os dados retornados pela RoasPay
      setDadosPix({
        qrCode: resultado.qr_code,        // base64
        pixCode: resultado.copypaste,     // código EMV
        value: resultado.value
      });

      setModalPixAberto(true);
    } catch (err) {
      alert("Erro ao gerar o PIX: " + err.message);
    } finally {
      setCarregando(false);
    }
  };

  const copiarCodigoPix = async () => {
    try {
      await navigator.clipboard.writeText(dadosPix.pixCode);
      alert(`Código PIX copiado!\nValor: R$ ${dadosPix.value}`);
    } catch (e) {
      alert("Erro ao copiar o código.");
    }
  };

  return v.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* ... (todo o JSX de header, formulário, botões etc. permanece igual) ... */

    v.jsx(Fd, {
      isOpen: modalPixAberto,
      onClose: () => setModalPixAberto(false),
      qrCode: dadosPix.qrCode,           // agora vem da RoasPay (base64)
      pixCode: dadosPix.pixCode,
      value: dadosPix.value,
      onCopyCode: copiarCodigoPix
    }),

    v.jsx($d, { isOpen: modalPromoAberto, onClose: () => setModalPromoAberto(false) })
  ]});
}

// Renderização (mantida igual)
nc(document.getElementById("root")).render(v.jsx(q.StrictMode, { children: v.jsx(Bd, {}) }));
// ==========================
// SONIDOS
// ==========================
const sonidos = {
    ok: new Audio("sounds/ok.wav"),
    error: new Audio("sounds/error.wav")
};



// ==========================
// AVATARES
// ==========================
const avatares = [
    "assets/avatar1.png",
    "assets/avatar2.png",
    "assets/avatar3.png",
    "assets/avatar4.png",
    "assets/avatar5.png",
    "assets/avatar6.png",
    "assets/avatar7.png",
    "assets/avatar8.png",
    "assets/avatar9.png",
    "assets/avatar10.png",
    "assets/avatar11.png",
    "assets/avatar12.png",
    "assets/avatar13.png",
    "assets/avatar14.png",
    "assets/avatar15.png",
    "assets/avatar16.png",
    "assets/avatar17.png",
    "assets/avatar18.png",
    "assets/avatar19.png",
    "assets/avatar20.png",
    "assets/avatar21.png",
    "assets/avatar22.png",
    "assets/avatar23.png",
    "assets/avatar24.png",
    "assets/avatar25.png",
    "assets/avatar26.png"
];


// ==========================
// 🎭 AVATARES SIN REPETICIÓN
// ==========================

let avataresMezclados = [];
let indiceAvatar = 0;

function mezclarArray(array){
    let arr = [...array];

    for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function inicializarAvatares(){
    avataresMezclados = mezclarArray(avatares);
    indiceAvatar = 0;
}

function obtenerAvatar(){

    // si ya se usaron todos → volver a mezclar
    if(indiceAvatar >= avataresMezclados.length){
        avataresMezclados = mezclarArray(avatares);
        indiceAvatar = 0;
    }

    let avatar = avataresMezclados[indiceAvatar];
    indiceAvatar++;

    return avatar;
}

// ==========================
// CASOS
// ==========================
const casos = [

    /* RAM */
    {p:"Problema: No da video", desc:"Encendí la PC, se escuchan los ventiladores y las luces se encienden, pero la pantalla se queda completamente negra. No sale ni el logo de la BIOS.", comp:"ram", tipo:"limpieza"},
    {p:"Problema: Pantalla azul", desc:"Mientras uso la computadora de repente aparece la pantalla azul de la muerte (BSOD) y se reinicia sola. Me ha pasado varias veces en los últimos días.", comp:"ram", tipo:"limpieza"},
    {p:"Problema: Se congela", desc:"La PC se queda completamente congelada, el mouse no se mueve y tengo que apagarla con el botón. Suele pasar cuando tengo varias pestañas abiertas o uso programas pesados.", comp:"ram", tipo:"limpieza"},
    {p:"Problema: Errores aleatorios", desc:"Me aparecen errores extraños, programas que se cierran solos y a veces el sistema se vuelve inestable sin motivo aparente.", comp:"ram", tipo:"limpieza"},

    /* CPU */
    {p:"Problema: Se apaga sola", desc:"La computadora funciona bien al principio, pero después de 20-30 minutos de uso se apaga completamente sin avisar.", comp:"cpu", tipo:"termica"},
    {p:"Problema: Sobrecalentamiento", desc:"La PC se pone muy caliente, especialmente cerca del procesador, y escucho que los ventiladores giran a toda velocidad.", comp:"cpu", tipo:"termica"},
    {p:"Problema: Reinicios", desc:"La computadora se reinicia sola varias veces al día, especialmente cuando estoy jugando o editando videos.", comp:"cpu", tipo:"termica"},
    {p:"Problema: Error BIOS", desc:"Al encender la PC aparece un mensaje de error en la BIOS que menciona problemas con el procesador o temperatura.", comp:"cpu", tipo:"termica"},

    /* PSU (Fuente de Poder) */
    {p:"Problema: No enciende", desc:"Presiono el botón de encendido y no pasa absolutamente nada: ni luces, ni ventiladores, ni un solo ruido.", comp:"fuente", tipo:"reemplazo"},
    {p:"Problema: Sin energía", desc:"La PC no da señales de vida. No se encienden las luces del motherboard ni giran los ventiladores.", comp:"fuente", tipo:"reemplazo"},
    {p:"Problema: Apagones", desc:"La computadora se apaga de repente aunque esté bien enchufada, y a veces tarda un rato en volver a encender.", comp:"fuente", tipo:"reemplazo"},
    {p:"Problema: No arranca", desc:"A veces enciende normalmente, pero otras veces no responde al botón de power hasta que lo intento varias veces.", comp:"fuente", tipo:"reemplazo"},

    /* DISCO DURO / SSD */
    {p:"Problema: Muy lenta", desc:"La PC tarda muchísimo en abrir programas, navegar por Windows y hasta para abrir carpetas. Todo se siente muy lento.", comp:"disco", tipo:"upgrade"},
    {p:"Problema: No detecta disco", desc:"El disco no aparece en el Explorador de archivos ni en el Administrador de discos.", comp:"disco", tipo:"reemplazo"},
    {p:"Problema: Ruido disco", desc:"Escucho ruidos extraños como clics o zumbidos que vienen de dentro de la computadora.", comp:"disco", tipo:"reemplazo"},
    {p:"Problema: Arranque lento", desc:"El arranque de Windows demora más de 2 minutos, antes era mucho más rápido.", comp:"disco", tipo:"upgrade"},
    {p:"Problema: Carga lenta", desc:"Los juegos y programas tardan una eternidad en cargar, incluso los que antes abrían rápido.", comp:"disco", tipo:"upgrade"},
    {p:"Problema: Error disco", desc:"Aparece un mensaje de error diciendo que hay un problema con el disco duro o que Windows no puede acceder a ciertos archivos.", comp:"disco", tipo:"reemplazo"},

    /* GPU (Tarjeta Gráfica) */
    {p:"Problema: Falla gráfica", desc:"Cuando estoy jugando el juego se congela, aparecen artefactos en pantalla o se distorsiona la imagen.", comp:"gpu", tipo:"reemplazo"},
    {p:"Problema: Bajo rendimiento", desc:"Los juegos corren con muy pocos FPS aunque tengo configuraciones bajas. Antes iba mucho mejor.", comp:"gpu", tipo:"reemplazo"},
    {p:"Problema: Pantalla negra juegos", desc:"Al abrir un juego la pantalla se pone negra después de unos segundos y tengo que reiniciar la PC.", comp:"gpu", tipo:"reemplazo"},
    {p:"Problema: Se apaga jugando", desc:"La PC se apaga completamente solo cuando estoy jugando videojuegos exigentes.", comp:"gpu", tipo:"reemplazo"},

    /* DRIVERS / SOFTWARE */
    {p:"Problema: Sin sonido", desc:"No sale audio ni por las bocinas ni por audífonos. Ya probé reiniciar pero sigue sin funcionar.", comp:"disco", tipo:"drivers"},
    {p:"Problema: USB falla", desc:"Los puertos USB no reconocen memorias, mouse o teclado. Algunos puertos sí funcionan, otros no.", comp:"disco", tipo:"drivers"},
    {p:"Problema: WiFi lento", desc:"La conexión WiFi es muy lenta o se desconecta constantemente, aunque otros dispositivos en la casa funcionan bien.", comp:"disk", tipo:"drivers"},

    /* SOFTWARE */
    {p:"Problema: PC lenta", desc:"La computadora está muy lenta aunque no tengo muchos programas abiertos. Creo que tiene demasiados archivos basura.", comp:"disco", tipo:"liberar"},
    {p:"Problema: Virus", desc:"Me aparecen ventanas emergentes extrañas, publicidad en el navegador y el antivirus detectó varias amenazas.", comp:"disco", tipo:"antivirus"},
    {p:"Problema: Sistema dañado", desc:"Tengo muchos errores de Windows, programas que no abren y el sistema se siente inestable.", comp:"disco", tipo:"restaurar"},
    {p:"Problema: Fallo actualización", desc:"Después de actualizar Windows la PC empezó a fallar y algunos programas ya no funcionan correctamente.", comp:"disco", tipo:"restaurar"},
    {p:"Problema: Disco lleno", desc:"Me aparece un mensaje de que el disco C: está casi lleno y no me deja instalar nada más.", comp:"disco", tipo:"liberar"},
    {p:"Problema: Programas fallan", desc:"Varios programas se cierran solos o muestran errores al abrirlos.", comp:"disco", tipo:"restaurar"},

    /* ====================== PERIFÉRICOS ====================== */
    /* MOUSE */
    {p:"Problema: Mouse no responde", desc:"El mouse no se mueve en pantalla. Lo conecto y desconecto pero sigue sin funcionar. La luz del mouse sí se enciende.", comp:"mouse", tipo:"drivers"},
    {p:"Problema: Mouse se mueve solo", desc:"El puntero del mouse se mueve solo por la pantalla o hace clic automáticamente sin tocarlo.", comp:"mouse", tipo:"limpieza"},
    {p:"Problema: Clics dobles", desc:"Cada vez que hago un solo clic, el mouse registra doble clic. Es muy molesto al seleccionar archivos.", comp:"mouse", tipo:"limpieza"},
    {p:"Problema: Mouse inalámbrico intermitente", desc:"El mouse inalámbrico se desconecta y reconecta constantemente, aunque las pilas están nuevas.", comp:"mouse", tipo:"reemplazo"},
    /* TECLADO */
    {p:"Problema: Teclas no responden", desc:"Varias teclas del teclado ya no funcionan (espacio, enter y algunas letras). Tengo que golpearlas fuerte para que respondan.", comp:"teclado", tipo:"limpieza"},
    {p:"Problema: Teclas repetidas", desc:"Cuando presiono una tecla se repite muchas veces (ej: holaaaaaaaa). Me pasa especialmente con las letras más usadas.", comp:"teclado", tipo:"limpieza"},
    {p:"Problema: Teclado fantasma", desc:"El teclado escribe letras que no estoy presionando o combina teclas que no toco.", comp:"teclado", tipo:"drivers"},
    /* MONITOR */
    {p:"Problema: Monitor sin señal", desc:"El monitor dice 'No Signal' o 'Sin señal' aunque la PC está encendida y se escuchan los ventiladores.", comp:"monitor", tipo:"reemplazo"},
    {p:"Problema: Parpadeo de pantalla", desc:"La pantalla del monitor parpadea constantemente, especialmente con fondos claros. Ya probé cambiar el cable HDMI.", comp:"monitor", tipo:"reemplazo"},
    {p:"Problema: Colores distorsionados", desc:"Los colores se ven raros, con tonos rosados o verdes. Algunas zonas de la pantalla se ven quemadas.", comp:"monitor", tipo:"reemplazo"},
    /* IMPRESORA */
    {p:"Problema: Impresora no imprime", desc:"Envío documentos a imprimir pero la impresora no responde. Dice 'impresión en cola' pero nunca imprime nada.", comp:"impresora", tipo:"drivers"},
    {p:"Problema: Atascos de papel", desc:"La impresora se atasca constantemente con el papel aunque uso papel nuevo y lo coloco correctamente.", comp:"impresora", tipo:"limpieza"},
    {p:"Problema: Impresión borrosa", desc:"Las impresiones salen borrosas, con rayas negras o colores muy pálidos. Ya cambié el cartucho pero sigue igual.", comp:"impresora", tipo:"limpieza"}


];

// ==========================
// VARIABLES
// ==========================
let seleccion=[];
let index=0;
let puntaje=0;
let resultados=[];


//=======================
// ALEATORIEDAD
//=======================

function mezclarArray(array){
    let arr = [...array];

    for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

// ==========================
// INICIO
// ==========================
function iniciarDesdeMenu(n){
    inicializarAvatares();
    seleccion = mezclarArray(casos).slice(0, n);
    index = 0;
    puntaje = 0;
    resultados = [];
    mostrarCaso();
}

// ==========================
// MOSTRAR CASO
// ==========================
function mostrarCaso(){

    if(index >= seleccion.length){
        return mostrarFinal();
    }

    let c = seleccion[index];

    document.getElementById("hud").innerHTML = `
    <div style="text-align:center; font-size:28px; color:yellow;">
        Caso ${index+1}/${seleccion.length} | Puntaje: ${puntaje}
    </div>
    `;

    document.getElementById("game").innerHTML = `
    <div class="cliente">
        <img src="${obtenerAvatar()}">
        <div class="dialogo retro">${c.desc}</div>
    </div>

    <div class="pc">
        <img src="assets/TM.png" class="placa">

        <div class="part ram" onclick="diagnosticar('ram')"></div>
        <div class="part cpu" onclick="diagnosticar('cpu')"></div>
        <div class="part disk" onclick="diagnosticar('disco')"></div>
        <div class="part fuente" onclick="diagnosticar('fuente')"></div>
        <div class="part gpu" onclick="diagnosticar('gpu')"></div>
        <div class="part mouse" onclick="diagnosticar('mouse')"></div>
        <div class="part teclado" onclick="diagnosticar('teclado')"></div>
        <div class="part impresora" onclick="diagnosticar('impresora')"></div>
        <div class="part monitor" onclick="diagnosticar('monitor')"></div>
        

        <h2 class="retro" style="text-align:center; color:red">${c.p}</h2>
    </div>
    `;
}

// ==========================
// DIAGNOSTICAR
// ==========================
function diagnosticar(parte){
    let c = seleccion[index];

    if(parte === c.comp){
        sonidos.ok.play();
        mostrarReparacion(c);
    }else{
        sonidos.error.play();
        avanzarCaso(false, c);
    }
}

// ==========================
// HERRAMIENTAS (versión clicable)
// ==========================
function herramientasHTML() {
    return `
    <div class="tool" data-tipo="limpieza">💨 Limpieza</div>
    <div class="tool" data-tipo="termica">🔥 Térmica</div>
    <div class="tool" data-tipo="reemplazo">🔁 Reemplazo</div>
    <div class="tool" data-tipo="upgrade">⚡ Upgrade</div>
    <div class="tool" data-tipo="drivers">💻 Drivers</div>
    <div class="tool" data-tipo="limpiar_sistema">🧽 Optimizar</div>
    <div class="tool" data-tipo="antivirus">💊 Antivirus</div>
    <div class="tool" data-tipo="formatear">💽 Formatear</div>
    <div class="tool" data-tipo="restaurar">♻️ Restaurar</div>
    <div class="tool" data-tipo="liberar">🗑 Liberar espacio</div>
    `;
}

// ==========================
// MOSTRAR REPARACIÓN (VERSIÓN CORREGIDA)
// ==========================
function mostrarReparacion(c) {
    document.getElementById("game").innerHTML = `
        <div style="text-align:center;">
            <div class="pc">
                <img src="assets/TM.png" class="placa">
                <div id="zona" class="part ${c.comp} highlight"></div>
            </div>
            
            <h3 class="retro">Selecciona la solución correcta para este componente:</h3>

            <div class="toolbox" id="toolbox">
                ${herramientasHTML()}
            </div>
        </div>
    `;

    // === DELEGACIÓN DE EVENTOS (más seguro) ===
    const toolbox = document.getElementById("toolbox");

    toolbox.addEventListener('click', function(e) {
        // Buscar si se hizo clic en un elemento .tool
        const tool = e.target.closest('.tool');
        
        if (!tool) return; // Si no es una herramienta, ignorar

        const tipoSeleccionado = tool.getAttribute('data-tipo');

        if (tipoSeleccionado === c.tipo) {
            // ¡Correcto!
            sonidos.ok.play();
            puntaje += 2.5;
            avanzarCaso(true, c);
        } else {
            // Incorrecto
            sonidos.error.play();
            avanzarCaso(false, c);
        }
    });
}


// ==========================
// AVANZAR
// ==========================
function avanzarCaso(correcto, c){

    resultados.push({
        correcto,
        problema: c.p,
        comp: c.comp,
        tipo: c.tipo
    });

    index++;

    setTimeout(()=> mostrarCaso(), 400);
}

// ==========================
// RESULTADOS
// ==========================
function mostrarFinal(){

    let html = `<div style="text-align:center;">`;
    html += `<h2 class="retro">🏁 Resultados</h2>`;

    resultados.forEach(r=>{
        if(r.correcto){
            html += `<p style="color:lime;" class="retro">✔ ${r.problema}</p>`;
        }else{
            html += `<p style="color:red;" class="retro">❌ ${r.problema} → ${r.comp} / ${r.tipo}</p>`;
        }
    });

    html += `<h1 style="font-size:40px;" class="retro">Puntaje Final: ${puntaje}</h1>`;
    html += `<button onclick="location.href='index.html'" class="btn btn-pulse retro" >Volver</button>`;
    html += `</div>`;

    document.getElementById("game").innerHTML = html;
    
}



// ==========================
// 🎵 MÚSICA DE FONDO
// ==========================
const bgMusic = document.getElementById("bgMusic");
const volumenControl = document.getElementById("volumen");
const btnMute = document.getElementById("btnMute");

// volumen inicial
bgMusic.volume = 0.2;

// intentar reproducir (requiere interacción del usuario)
document.body.addEventListener("click", () => {
    if(bgMusic.paused){
        bgMusic.play().catch(()=>{});
    }
}, { once: true });

// control de volumen
volumenControl.addEventListener("input", ()=>{
    bgMusic.volume = volumenControl.value;
});

// mute
btnMute.addEventListener("click", ()=>{
    if(bgMusic.muted){
        bgMusic.muted = false;
        btnMute.textContent = "🔊";
    }else{
        bgMusic.muted = true;
        btnMute.textContent = "🔇";
    }
});





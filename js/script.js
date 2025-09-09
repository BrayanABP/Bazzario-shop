// Base de datos de productos (simulada)
const products = [
    // Tecnología
    {
        id: 1,
        name: "Parlante Bluetooth Boombox Jbl",
        precio: 180000, // Precio o
        descuento: 153900, // Descuento
        category: "tecnologia",
        image: "img/tecnologia/jbl/jbl1.webp",
        description: "Sonido potente, Bluetooth, tarjeta SD, radio FM, powerbank",
        detailedDescription: `Sonido envolvente, hecho para ser el más potente. Boombox (genérico) ofrece sonido monstruoso junto con el más duro golpe bajo.

        Este es un altavoz parlante portátil recargable que ofrece un sonido estéreo increíble y potente, además de buena calidad.
El JBL Boombox 4, es uno de los altavoces más populares de la firma por su tamaño. Potencia, practicidad y calidad.

Función por bluetooth y tarjeta SD, cuenta con emisora FM y powerbank para cargar tus dispositivos.
Ideal para llevar a la playa o cualquier paseo, eventos o para un regalo familiar y realmente útil.

- Batería de 2800mAh
- Tamaño: 32 x17.5 x12.5 cm
- A prueba de salpicaduras NO SUMERGIBLE
- Versión Bluetooth: bt4.0
- Función: tarjeta TF (o memoria SD)
- Radio emisora FM
- Puerto USB powerbank o batería extra doble carga.
- Potencia de sonido: 40W
- Peso del producto: 1200g`,
        images: [
            "img/tecnologia/jbl/jbl1.webp",
            "img/tecnologia/jbl/jbl1.1.webp",
            "img/tecnologia/jbl/jbl1.2.webp",
            "img/tecnologia/jbl/jbl2.webp",
            "img/tecnologia/jbl/jbl3.webp",
            "img/tecnologia/jbl/jbl3.1.webp",
            "img/tecnologia/jbl/jbl4.webp",
            "img/tecnologia/jbl/jbl4esp.webp",
            "img/tecnologia/jbl/jbl5.webp",
            "img/tecnologia/jbl/jbl6.webp",
            "img/tecnologia/jbl/jbl6.2.webp",
            "img/tecnologia/jbl/jbl6.3.webp"
        ]
    },
    {
        id: 2,
        name: "Audifono Diadema P9 Plus",
        precio: 75000,
        descuento: 64900,
        category: "tecnologia",
        image: "img/tecnologia/aud.inal/negro1.webp",
        description: "Estéreo Bilateral,función de llamada, control de voz, soporte para música, Conexión multipunto, inducción de uso. ",
        detailedDescription:
            `CARGA RÁPIDA, batería de polímero de 400mAh, chip de protección integrado, hasta 12 horas de reproducción, puede cumplir con los viajes de larga distancia, deja que la música te acompañe todo el camino.
    
            Se puede usar continuamente durante aproximadamente 2,5 horas después de cargar durante 10 minutos.
    
            Rotación a 110 °, es cómodo de llevar durante mucho tiempo y fácil de llevar. función de llamada, control de voz, soporte para música, Conexión multipunto, inducción de uso.

    Uso de inducción, uso de conexión, avisos en chino e inglés, asistente de voz

-Rango de transmisión: 15 metros.
-Conexion Bluetooth
-SD card maximo de 32 GB
-Voltaje de carga: 5v
-Tiempo de carga completa: 2 - 3 horas

Incluye: 1x Auriculares estéreo inalámbricos / 1x cable de carga TYPE-C / / 1x Manual de instrucciones`,
        images: [
            "img/tecnologia/aud.inal/negro1.webp",
            "img/tecnologia/aud.inal/rosa1.webp",
            "img/tecnologia/aud.inal/rosa2.webp",
            "img/tecnologia/aud.inal/azul1.webp",
            "img/tecnologia/aud.inal/azul2.webp",
            "img/tecnologia/aud.inal/negrotodo.webp"
        ]
    },
    {
        id: 3,
        name: "Sierra Electrica Portatil 48v",
        precio: 130000,
        descuento: 110900,
        category: "tecnologia",
        image: "img/tecnologia/cierra/cierra1.webp",
        description: "Sierra de 48v ligera y facil de usar para jardineria y carpinteria",
        detailedDescription:
            `Sierra Eléctrica Portátil 48V, la herramienta para jardinería y carpintería. ¡Ligera, potente y fácil de usar en cualquier lugar!

-2 baterías recargables de 48V Li-Ion incluidas.
-Motor de alto rendimiento: mayor velocidad y eficiencia de corte.
-Protector de cadena y diseño seguro para evitar accidentes.
-Estuche rígido con cierre y compartimentos para almacenamiento.
-Cargador de batería incluido.
-Tamaño compacto, ideal para trabajos en altura o espacios reducidos.`,
        images: [
            "img/tecnologia/cierra/cierra1.webp",
            "img/tecnologia/cierra/cierra2.webp",
            "img/tecnologia/cierra/cierra3.webp",
            "img/tecnologia/cierra/cierra4.webp",
            "img/tecnologia/cierra/cierra5.webp",
            "img/tecnologia/cierra/cierra6.webp"
        ]
    },
    {
        id: 4,
        name: "Soporte De Laptop y Tablet Ajustable",
        precio: 70000,
        descuento: 62990,
        category: "tecnologia",
        image: "img/tecnologia/soporte/sopo1.webp",
        description: "Soporte ajustable con ventilación incluida",
        detailedDescription: `Soporte para laptop diseñado para ofrecerte una experiencia visual completamente ergonómica.
    Eleva la pantalla a una altura adecuada, ayuda a evitar molestias en el cuello por mirar hacia abajo y reduce la fatiga visual causada por estar demasiado cerca de la pantalla.,
    
    La base de refrigeración cuenta con un ventilador de gran tamaño que disipa el calor, evitando el sobrecalentamiento de tu laptop y tablet. Con tres velocidades de ventilación ajustable:

-Modo suave: 40 CFM
-Modo medio: 52 CFM
-Modo potente: 85 CFM
-Altura y ángulo ajustables
    `,
        images: [
            "img/tecnologia/soporte/sopo1.webp",
            "img/tecnologia/soporte/sopo2.webp",
            "img/tecnologia/soporte/sopo3.webp",
            "img/tecnologia/soporte/sopo4.webp",
            "img/tecnologia/soporte/sopo5.webp"
        ]
    },
    {
        id: 5,
        name: "Aro De Luz Rgb",
        precio: 70000,
        descuento: 62000,
        category: "tecnologia",
        image: "img/tecnologia/aroluz/aro1.webp",
        description:
            "Aro de luz regulable de 26CM luces LED RGB mejoradas",
        detailedDescription: `Ilumina tus fotos, videos y transmisiones con este aro de luz LED RGB de 26 cm, equipado con 150 LEDs de alta calidad que ofrecen una temperatura de color ajustable de 2800K a 6500K y una intensidad de hasta 1600 lúmenes. Su diseño sin parpadeos ni reflejos es seguro para tu piel y perfecto para largas sesiones.

    Incluye 10 colores (blanco, cálido, RGB y más) y 12 efectos dinámicos, con más de 150 combinaciones para lograr el ambiente perfecto en cada toma.

-Aro de luz LED RBG
-Trípode 2 metros
-Soporte para teléfono
-Accesorios 360 1 / 4 universal
    `,
        images: [
            "img/tecnologia/aroluz/aro1.webp",
            "img/tecnologia/aroluz/aro2.webp",
            "img/tecnologia/aroluz/aro3.webp",
            "img/tecnologia/aroluz/aro4.webp",
            "img/tecnologia/aroluz/aro5.webp"
        ]
    },
    {
        id: 6,
        name: "Audifonos Tws M25 Bluetooth 5.2",
        precio: 65000,
        descuento: 54900,
        category: "tecnologia", image: "img/tecnologia/TwsM25/tws2.webp",
        description: "Auriculares M25 TWS inalámbricos táctil, con la mejor calidad de conexión Bluetooth 5.1v con pantalla Digital",
        detailedDescription: `Auriculares M25 TWS inalámbricos táctil, con la mejor calidad de conexión Bluetooth 5.1v con pantalla Digital, ideal para jugar. Su diseño táctil te ofrece un control preciso para una experiencia de juego inmersiva. Sus audífonos de alta calidad te permiten disfrutar los mejores sonidos para una experiencia totalmente satisfactoria.

-El auricular tiene un chip Bluetooth 5.1, que tiene una conexión rápida y estable.
-Con la operación táctil inteligente, es conveniente de usar.
-Tiene IC de reducción de ruido activo incorporado, que proporciona llamadas telefónicas HD.
-Puede usar uno o dos auriculares con sonido estéreo HiFi.
        `,
        images: [
            "img/tecnologia/TwsM25/tws2.webp",
            "img/tecnologia/TwsM25/tws1.webp",
            "img/tecnologia/TwsM25/tws3.webp",
            "img/tecnologia/TwsM25/tws4.webp",
            "img/tecnologia/TwsM25/tws5.webp"
        ]
    },
    {
        id: 7,
        name: "Intercomunicador Bt12",
        precio: 90000,
        descuento: 79900,
        category: "tecnologia",
        image: "img/tecnologia/intercomunicador/intercomunicador1.webp",
        description: "Intercomunicador Bt12 Auriculares Casco Bluetooh, tecnología Bluetooth 5.0, garantiza una conexión estable y rápida con otros dispositivos.",
        detailedDescription: `Intercomunicador Bt12 Auriculares Casco Bluetooh, tecnología Bluetooth 5.0, garantiza una conexión estable y rápida con otros dispositivos.
    
Calidad de Sonido: La calidad HiFi es notable, con agudos claros y graves profundos, lo que hace que la experiencia auditiva sea muy agradable, tanto para escuchar música como para mantener conversaciones. Duración de la Batería: La batería de 1000 mAh proporciona varias horas de uso continuo, lo cual es muy beneficioso para aquellos que realizan viajes largos sin acceso fácil a puntos de recarga.

-Auriculares y manos libres Bluetooh, el auricular tiene una excelente transmisión de señal, consumo de energía ultra bajo.
-Google asistant.
-Contesta y realiza llamada.
-Pausa y despausa canción.
-Es pequeño, ligero y fácil de llevar.
-Impermeable.`,
        images: [
            "img/tecnologia/intercomunicador/intercomunicador1.webp",
            "img/tecnologia/intercomunicador/intercomunicador2.webp",
            "img/tecnologia/intercomunicador/intercomunicador3.webp",
            "img/tecnologia/intercomunicador/intercomunicador4.webp",
            "img/tecnologia/intercomunicador/intercomunicador5.webp"
        ]
    },
    {
        id: 8, name: "Destornillador Electrico Zo",
        precio: 60000,
        descuento: 54900,
        category: "tecnologia",
        image: "img/tecnologia/Destornillador/destorni1.webp",
        description: "Destornillador Eléctrico Zo – Precisión y comodidad en cada giro",
        detailedDescription: `Haz más fácil cualquier tarea de armado, reparación o bricolaje con el Destornillador Eléctrico Zo, una herramienta portátil, recargable y versátil que te permite trabajar sin esfuerzo y con total precisión, incluso en espacios reducidos.

-Motor eléctrico con rotación hacia ambos sentidos (atornilla y desatornilla)
-Batería recargable por USB (cable incluido)
-Incluye set de puntas intercambiables para diferentes tipos de tornillos
-Luz LED incorporada para mejor visibilidad en áreas oscuras
-Mango ergonómico y compacto, ideal para trabajos delicados o en espacios estrechos
-Ideal para muebles, electrónicos, juguetes, bisagras, reparaciones menores y más
        `,
        images: [
            "img/tecnologia/Destornillador/destorni1.webp",
            "img/tecnologia/Destornillador/destorni2.webp",
            "img/tecnologia/Destornillador/destorni3.webp",
            "img/tecnologia/Destornillador/destorni4.webp",
            "img/tecnologia/Destornillador/destorni5.webp"
        ]
    },
    {
        id: 9, name: "Peluquera Wahl Professional / Cordless Magic Clip",
        precio: 120000,
        descuento: 100000,
        category: "tecnologia",
        image: "img/tecnologia/maquina/maquina1.webp",
        description: "recortadora trimmer inalámbrica diseñada para ofrecer precisión, comodidad y alto rendimiento en cada uso",
        detailedDescription: `La Wahl Professional Sterling 5 Star (8777) es una recortadora trimmer inalámbrica diseñada para ofrecer precisión, comodidad y alto rendimiento en cada uso. Con un motor rotativo potente y un diseño compacto y ligero, es ideal para delineados, acabados y cortes de detalle.
        
        Funciona con batería recargable vía USB y brinda hasta 60 minutos de autonomía continua, lo que la convierte en una herramienta práctica y confiable tanto para profesionales como para uso personal.

-4 peines guía de precisión
-1 aceite lubricante
-1 cepillo de limpieza
-1 catálogo
        `,
        images: [
            "img/tecnologia/maquina/maquina1.webp",
            "img/tecnologia/maquina/maquina2.webp",
            "img/tecnologia/maquina/maquina3.webp",
            "img/tecnologia/maquina/maquina4.webp"
        ]
    },
    {
        id: 10, name: "Combo Maquina Espana Con Vgr 292",
        precio: 350000,
        descuento: 299900,
        category: "tecnologia",
        image: "img/tecnologia/combomaqui/combo1.webp",
        description: "Hoja de acero al carbono, diseño compuesto de doble capa.",
        detailedDescription: `Hoja de acero al carbono, diseño compuesto de doble capa. La hoja de acero al carbono no atrapa el cabello y puede cuidar rápidamente de la cabeza calva, la gradación del recorte, la escultura y otros peinados.

        El cuerpo totalmente metálico hecho de plomo espacial y acero inoxidable es duradero y no se daña fácilmente.
La máquina Adopta un motor silencioso y un motor de baja frecuencia, lo que reduce eficazmente el ruido innecesario y El decibelio es como un zumbador.

-maquina de corte vgr 292
-patillera vgr 071
-shaver vgr 331
-tijeras x2 de 7" pulgadas
-navaja
-pulidor
        `,
        images: [
            "img/tecnologia/combomaqui/combo1.webp",
            "img/tecnologia/combomaqui/combo2.webp",
            "img/tecnologia/combomaqui/combo3.webp",
            "img/tecnologia/combomaqui/combo4.webp",
            "img/tecnologia/combomaqui/combo5.webp"
        ]
    },

    {
        id: 11, name: "Microfono Condensador Profesional Bm80",
        precio: 140000,
        descuento: 120000,
        category: "tecnologia",
        image: "img/tecnologia/micro/micro1.webp",
        description: "kit de micrófono de condensador USB BM80 con brazo flexible",
        detailedDescription: `Micrófono de condensador USB BM80 con brazo flexible para grabaciones profesionales y domésticas.
        
        Su calidad de audio alcanza una frecuencia de muestreo de hasta 48 kHz / 16 bits, garantizando un sonido nítido y sin interferencias, ideal para streaming, podcasts, doblajes, música, entrevistas, videoconferencias y grabaciones en estudio o en casa.
        
*Marca / Modelo: BM80
*Fuente de alimentación: USB
*Direccionalidad: Unidireccional (cardioide)
*Sensibilidad: -42 ± 3 dB (1,5 V, 680 KΩ; 0 dB = 1V/Pa a 1 kHz)
*Frecuencia de muestreo: 48 kHz / 16 bits

-Brazo de soporte ajustable
-Soporte para micrófono
-Clip de escritorio con cojines suaves (altura máx. 7 cm)
-Filtro antipop
-Funda de esponja
-Cable de conversión USB
-Cable de audio
        `,
        images: [
            "img/tecnologia/micro/micro1.webp",
            "img/tecnologia/micro/micro2.webp",
            "img/tecnologia/micro/micro3.webp",
            "img/tecnologia/micro/micro4.webp",
            "img/tecnologia/micro/micro5.webp"
        ]
    },
    // Hogar
    {
        id: 15, name: "Juego De Ollas Acero Inoxidable",
        precio: 180000,
        descuento: 149900,
        category: "hogar",
        image: "img/hogar/olla/olla1.webp",
        description: "Este set incluye 5 ollas con tapas de vidrio templado.",
        detailedDescription: `Este set incluye 5 ollas con tapas de vidrio templado, diseñadas para resistir altas temperaturas y garantizar una cocción uniforme. Su fabricación en acero inoxidable resistente a la corrosión asegura durabilidad, fácil limpieza y un acabado elegante que realza cualquier cocina.

Las asas ergonómicas proporcionan un agarre seguro y cómodo, mientras que las tapas permiten supervisar la cocción sin perder vapor ni sabor. Disponible en 4 presentaciones modernas:

-Azul Turqui
-Plateado
-Negro
-Rosado
`,
        images: [
            "img/hogar/olla/olla1.webp",
            "img/hogar/olla/olla2.webp",
            "img/hogar/olla/olla3.webp",
            "img/hogar/olla/olla4.webp",
            "img/hogar/olla/olla5.webp",
            "img/hogar/olla/olla6.webp",
            "img/hogar/olla/olla7.webp",
            "img/hogar/olla/olla8.webp"
        ]
    },
    {
        id: 16, name: "Set de cuchillos de cocina 9 piezas",
        precio: 170000,
        descuento: 149900,
        category: "hogar",
        image: "img/hogar/cuchillos/cuchi1.webp",
        description: "9 piezas con soporte giratorio, hojas de acero inoxidable y mangos ergonómicos color negro Chef Master",
        detailedDescription: `Lleva tu experiencia culinaria al siguiente nivel con el juego de cuchillos profesionales Chef de 9 piezas, fabricado en acero inoxidable de alta calidad. Este elegante y funcional set está diseñado para satisfacer todas tus necesidades en la cocina, desde rebanar y cortar hasta pelar y afilar.

- Material: Acero inoxidable de alta calidad.
- Contenido del Set:
- 1 cuchillo de carnicero de 16.5 cm (total con el mango: 31 cm).
- 1 cuchillo de chef de 20 cm (total con el mango: 34 cm).
- 1 cuchillo para filetear de 20 cm (total con el mango: 34 cm).
- 1 cuchillo utilitario de 12.5 cm (total con el mango: 24 cm).
- 1 cuchillo de pelar de 9 cm (total con el mango: 21 cm).
- 1 tijera de cocina de 18 cm.
- 1 pelador de 14.5 cm.
- 1 afilador de 30 cm.
- 1 soporte giratorio (alto: 23 cm, ancho: 16 cm).
`,
        images: [
            "img/hogar/cuchillos/cuchi1.webp",
            "img/hogar/cuchillos/cuchi2.webp",
            "img/hogar/cuchillos/cuchi3.webp",
            "img/hogar/cuchillos/cuchi4.webp",
            "img/hogar/cuchillos/cuchi5.webp",
            "img/hogar/cuchillos/cuchi6.webp"
        ]
    },
    // moda
    {
        id: 20, name: "Cartera Manos Libres Para Dama Gla 2315",
        precio: 110000,
        descuento: 94900,
        category: "moda",
        image: "img/moda/cartera/cartera1.webp",
        description: "Cartera manos libres para dama, comodidad y lujo en diferentes colores",
        detailedDescription: `Cartera manos libres para dama, comodidad y lujo en diferentes colores, material de fabricación 100% poliuretano.
 
-Medidas 20*8*14

Cuidados

* Usar un paño blanco limpio ligeramente húmedo.
* No lavar a máquina, ni usar detergentes. No mojar.
* No debe limpiarse, ni dejarle caer perfumes, gel ni ningún líquido que contenga alcohol o solvente.
* No tener contacto con tinta de bolígrafos, ni marcadores.
* Almacenar siempre en lugares ventilados, conservando su forma con el empaque original.
`,
        images: [
            "img/moda/cartera/cartera1.webp",
            "img/moda/cartera/cartera2.webp",
            "img/moda/cartera/cartera3.webp",
            "img/moda/cartera/cartera4.webp",
            "img/moda/cartera/cartera5.webp"
        ]
    },
    {
        id: 21, name: "Nike Air Force 1 Corte Bajo",
        precio: 120000,
        descuento: 99900,
        category: "moda",
        image: "img/moda/Nike air/nike1.webp",
        description: "NIKE AIR FORCE 1 fabricados en material sintetico de excelente calidad y durabilidad",
        detailedDescription: `NIKE AIR FORCE 1 fabricados en material sintetico de excelente calidad y durabilidad .Interior de la zapatilla en forro terry y con la suela cosida muy suave con plantilla confort y suela en espanso súper liviana, suaves y cómodas a la hora de caminar.
 
        MODELOS

-Blanco x Borde Negro
-Negro x Nobuk
-Negro
-Blanco

Tallas completas desde la 34 hasta la 43.
`,
        images: [
            "img/moda/Nike air/nike1.webp",
            "img/moda/Nike air/nike2.webp",
            "img/moda/Nike air/nike3.webp",
            "img/moda/Nike air/nike4.webp"
        ]
    },
    {
        id: 22, name: "Tennis Emma suela 3 cm",
        precio: 150000,
        descuento: 134900,
        category: "moda",
        image: "img/moda/Tenis emma/emma1.webp",
        description: "Los tenis Emma cuentan con una suela de 3 cm que brinda altura sutil y confort en cada paso.",
        detailedDescription: `Los tenis Emma cuentan con una suela de 3 cm que brinda altura sutil y confort en cada paso,
        son ideales para combinar con cualquier look. Su diseño moderno y versátil los convierte en un básico perfecto para tu día a día.
 
        MODELOS

-Negro
-Marfil
-Verde

Tallas completas desde la 34 hasta la 40.
`,
        images: [
            "img/moda/Tenis emma/emma1.webp",
            "img/moda/Tenis emma/emma2.webp",
            "img/moda/Tenis emma/emma3.webp",
            "img/moda/Tenis emma/emma4.webp",
            "img/moda/Tenis emma/emma5.webp",
            "img/moda/Tenis emma/emma6.webp"
        ]
    },
    {
        id: 23, name: "Rinonera Antirobo Impermeble",
        precio: 65000,
        descuento: 57900,
        category: "moda",
        image: "img/moda/riñonera/riño1.gif",
        description: "funda de viaje resistente al agua cuenta con un puerto de carga USB que te permite conectar una batería externa dentro del paquete para cargar teléfonos",
        detailedDescription: `Riñonera de diseño impermeable, elegante y con diseño bloqueo antirrobo con contraseña de 3 dígitos para asegurar los ganchos de la cremallera y evitar que roben tus artículos personales
        Permite almacenar tablets de hasta10.5 pulgadas, teléfono, llaves, dinero. lápiz labial, toalla de papel, toallitas y mucho más.
 
        Puerto de carga USB: esta funda de viaje resistente al agua cuenta con un puerto de carga USB que te permite conectar una batería externa dentro del paquete para cargar teléfonos

        Peso: 228 gramos

Medidas riñonera 30cm x 27cm x 9cm
`,
        images: [
            "img/moda/riñonera/riño1.gif",
            "img/moda/riñonera/riño2.webp",
            "img/moda/riñonera/riño3.webp",
            "img/moda/riñonera/riño4.webp"
        ]
    },
    // Cursos
    {
        id: 26,
        name: "Curso de Microblading Cejas pelo a pelo",
        precio: 1258874,
        descuento: 629437,
        category: "cursos",
        subcategory: "belleza",
        image: "img/cursos/microblanding.webp",
        description: "Aprende la técnica de microblading pelo a pelo para cejas perfectas.",
        detailedDescription: `En este curso podrás aprender la técnica más novedosa de micropigmentación, consiste en la elaboración de simulación de vellos sobre la zona de las cejas que ayuda a visualizar las cejas más definidas, eliminado pequeños espacios de alopecia o alopecia total del área, cicatrices sobre las cejas o cualquier imperfección que tenga las cejas.

        Se aprenderá a realizar el diseño desde cero, sin ningún conocimiento previo, con diferentes formas para lograr un diseño perfecto, que más se adapte a tus necesidades.

        El curso es 100% virtual, con todos los temas necesarios para poder convertirse en una profesional en micropigmentación.`,
        images: [
            "img/cursos/microblanding.webp",
        ],
        type: "Curso",
        rating: 4.7,
        courseLink: "https://www.bellasbellas.com/curso007/?ref=F101667375X",
        buyCourseBtn: "https://go.hotmart.com/F101667375X?ap=f166" 
    },
    {
        id: 27,
        name: "Curso de Ingles Prático",
        precio: 262215,
        descuento: 209772,
        category: "cursos",
        subcategory: "idiomas",
        image: "img/cursos/aprendei.webp",
        description: "MasterClass de APRENDE INGLÉS PRÁCTICO, tendrás acceso a un programa completo para que puedas sentirte cómodo con el idioma en cualquier situación.",
        detailedDescription: `¿Alguna vez has sentido que hablas en un idioma desconocido cuando intentas comunicarte en inglés?

Puedes perder oportunidades de trabajo, dejar de conocer gente e incluso no conquistar la persona que te gusta. Aprender inglés ya no es un lujo... !ES UNA NECESIDAD!

Rompe con ese obstáculo que te quita valor e impacto.

Con este MasterClass de APRENDE INGLÉS PRÁCTICO, tendrás acceso a un programa completo para que puedas sentirte cómodo con el idioma en cualquier situación.

`,
        images: [
            "img/cursos/aprendei.webp",
        ],
        type: "Curso",
        rating: 4.7,
        courseLink: "https://go.hotmart.com/X101797665E?ap=fcc6",
        buyCourseBtn: "https://go.hotmart.com/X101797665E?ap=a540" 
    },
    {
        id: 28,
        name: "Cuso de Dropshipping desde cero",
        precio: 330772,
        descuento: 207820,
        category: "cursos",
        subcategory: "emprendimientos",
        image: "img/cursos/dropshi.webp",
        description: "usar las mejores estrategias y herramientas para buscar y vender productos de alta calidad",
        detailedDescription: `onocerás todas las bases que necesitas para empezar a crear tu propio negocio en una de las plataformas de comercio electrónico más importantes del momento, Mercado Libre. Aplicando estrategias, herramientas y tips que te ayudarán a convertir en un Pro de las ventas online.
        
        Bajo la guía de Rudy Couoh, quién tiene una experiencia de más de 6 años con las ventas en línea en diferentes plataformas como Mercado Libre, Amazon, Linio e EBay; comenzarás tu camino para poder construir esa meta con la que tanto has soñado, aprenderás a conocer paso a paso y desde cero qué es y cómo funciona el Dropshipping, a usar estrategias para posicionar tu perfil y tus productos entre los más vendidos, además de tips que te ayudarán a mantenerte siempre en tendencia dentro de la plataforma.
        
        Al finalizar este curso estarás listo para emprender la conquista del mundo de las ventas online.`,
        images: [
            "img/cursos/dropshi.webp"
        ],
        type: "Curso",
        rating: 3.9,
        courseLink: "https://go.hotmart.com/I101797368P",
        buyCourseBtn: "https://go.hotmart.com/I101797368P?ap=323b" 
    },
    {
        id: 29,
        name: "FitBand 20",
        precio: 280900,
        descuento: 203705,
        category: "cursos",
        subcategory: "salud",
        image: "img/cursos/fitband.webp",
        description: "Reto de 8 semanas para quemar grasa, tonificar el cuerpo y perder peso entrenando desde casa.",
        detailedDescription: `Curso de fotografía para todos los niveles, desde principiantes hasta avanzados. Aprende sobre composición, iluminación, edición y técnicas avanzadas para capturar imágenes impresionantes. Incluye módulos sobre fotografía de retrato, paisaje y producto.
        ¿Y si pudieras transformar tu cuerpo desde casa, con solo 20 minutos al día y una simple banda elástica?

FitBand20 es un reto fitness en casa, diseñado para mujeres reales, con poco tiempo y muchas ganas de verse y sentirse mejor. A través del exclusivo método de Resistencia Activa y Cardio Controlado, activas el efecto EPOC: una respuesta metabólica que mantiene tu cuerpo quemando grasa hasta 24 horas después de entrenar.

`,
        images: [
            "img/cursos/fitband.webp"
        ],
        type: "Curso",
        rating: 5,
        courseLink: "https://go.hotmart.com/J101809925K",
        buyCourseBtn: "https://pay.hotmart.com/C79988994C?bid=1757394169328" 
    },
    {
        id: 30,
        name: "Curso de Desarrollo Web con HTML5 y CSS3 + Flexbox, CSS Grid y Bootstrap 5",
        precio: 249434,
        descuento: 124717,
        category: "cursos",
        subcategory: "programacion",
        image: "img/cursos/desarrolloweb.webp",
        description: "Aprende a programar páginas web desde cero haciendo uso de HTML5 y aplicando estilos con CSS3",
        detailedDescription: `En este curso recibirás todas las herramientas necesarias para empezar el mundo del desarrollo web. Este es el curso que me hubiese gustado ver antes de iniciarme en el desarrollo web.

Aprenderás las bases fundamentales de cómo funciona la web y conceptos esenciales que necesitas para trabajar en proyectos profesionales.

Aprenderás a crear por ti mismo una página web desde cero, con el uso de HTML5 te dará la libertad de iniciarte en el desarrollo web y con CSS3 lograrás otorgarle formato o embellecimiento a tu sitio web

Al finalizar el curso te sentirás totalmente preparado y animado para aplicar estos conceptos en tus proyectos personales y profesionales. El contenido del curso está totalmente actualizado con la última versión de los programas que vas a utilizar.`,
        images: ["img/cursos/desarrolloweb.webp"],
        type: "Curso",
        rating: 4.3,
        courseLink: "https://go.hotmart.com/V101810256N",
        buyCourseBtn: "https://go.hotmart.com/V101810256N?ap=3a7f" 
    },
    {
        id: 38,
        name: "Curso Coctelería Clásica",
        precio: 187077,
        descuento: 103932,
        category: "cursos",
        subcategory: "comidas-bebidas",
        image: "img/cursos/coctel.webp",
        description: "Iniciate en la coctelería profesional, clásica y de vanguardia. Aprendiendo interesantes técnicas y atractivas recetas que luego podrás desarrollar por tu cuenta.",
        detailedDescription: `A través de este curso podrás iniciarte en la coctelería profesional, clásica y de vanguardia.
        
        Aprendiendo interesantes técnicas y atractivas recetas que luego podrás desarrollar por tu cuenta, aprenderás las recetas más famosas a nivel mundial de cócteles y aperitivos, las que se usan en cualquier bar del mundo, y además todo lo necesario sobre uso de cocteleras y mezclas.

Éste curso es perfecto para que comiences tu vida como bartender amateur, aprendas todo lo que el profesor te enseñará y luego dejes volar tu imaginación creando tus propias recetas y sabores.
        `,
        images: ["img/cursos/coctel.webp", "https://placehold.co/400x300/A0522D/FFFFFF?text=Bebidas+2"],
        type: "Curso",
        rating: 4.8,
        courseLink: "https://go.hotmart.com/V101667176X",
        buyCourseBtn: "https://go.hotmart.com/V101667176X?ap=ff27" 
    },
    {
        id: 39,
        name: "Cuso Japonés desde Cero",
        precio: 1247169,
        descuento: 403252,
        category: "cursos",
        subcategory: "idiomas",
        image: "img/cursos/japones.webp",
        description: "Aprenda Japonés desde cero. Para estudiar, trabajar y viajar a Japón.",
        detailedDescription: `El curso Japonés desde cero, consiste en formar la base principal para poder entablar una conversación cotidiana en japonés.

Además, este curso ofrece la posibilidad de que puedas escribir en hiragana y registrar tu diario en japonés. Aprenderás nuevas palabras, partículas, más de 400 verbos, diálogos cotidianos, material de apoyo en app personalizada, PPT, PDF y otros que ayudarán a reforzar todo el proceso de aprendizaje.`,
        images: ["img/cursos/japones.webp"],
        type: "Curso",
        rating: 4.9,
        courseLink: "https://go.hotmart.com/V101810985D?dp=1",
        buyCourseBtn: "https://go.hotmart.com/V101810985D?ap=8b24" 
    },
    {
        id: 40,
        name: "Curso de cero a experta en uñas polygel",
        precio: 247452,
        descuento: 145462,
        category: "cursos",
        subcategory: "belleza",
        image: "img/cursos/polygel.webp",
        description: "Aprenderás desde lo básico hasta técnicas avanzadas como capping, baby boomer y blooming.",
        detailedDescription: `En  nuestro programa DE CERO A EXPERTA en polygel, aprenderás desde lo básico hasta técnicas avanzadas como capping, baby boomer y blooming.
        Cada módulo te ayudará a crear diseños únicos y espectaculares. Además, recibirás herramientas para iniciar tu propio negocio de uñas desde casa, Convirtiendo tu pasión por el Polygel en una carrera exitosa y logrando el impacto que deseas en la industria de la belleza.

        A través de 10 módulos en video de alta calidad, aprenderás todo lo necesario para dominar el Polygel desde cero. Además, tendrás acceso a una asesoría personalizada en un grupo privado de Telegram, donde podrás aclarar todas tus dudas. Como complemento, recibirás increíbles bonos de regalo diseñados para reforzar y potenciar tu aprendizaje.
        `,
        images: ["img/cursos/polygel.webp"],
        type: "Curso",
        rating: 4.7,
        courseLink: "https://go.hotmart.com/Q101797375X",
        buyCourseBtn: "https://go.hotmart.com/Q101797375X?ap=152a" 
    },
    {
        id: 41,
        name: "Cuso Frontend y Backend con Node Js",
        precio: 473924,
        descuento: 236962,
        category: "cursos",
        subcategory: "programacion",
        image: "img/cursos/nodejs.webp",
        description: "Serás capaz de diseñar complejas aplicaciones del lado del Back-End",
        detailedDescription: `En este curso aprenderás a desarrollar aplicaciones modernas con el entorno de desarrollo que ofrece Node.js y el motor de base de datos relacionales MySQL. Desarrollarás programas con el lenguaje de programación Javascript del lado del servidor aplicando técnicas asincrónicas.

Aprenderás a trabajar con el motor de Base de datos MySQL dominando la gestión de los datos en forma eficiente, ágil y con una gran facilidad de escalabilidad.

Al finalizar el curso serás capaz de diseñar complejas aplicaciones del lado del backend, robustas, rápidas y escalables, dominando diferentes técnicas de comunicación entre el Front-End y el Back-End.`,
        images: ["img/cursos/nodejs.webp"],
        type: "Curso",
        rating: 4.4,
        courseLink: "https://go.hotmart.com/F101804912A",
        buyCourseBtn: "https://go.hotmart.com/F101804912A" 
    },
    {
        id: 42,
        name: "Curso Máster de Ojos - Perfeccionamiento",
        precio: 350862,
        descuento: 207862,
        category: "cursos",
        subcategory: "belleza",
        image: "img/cursos/masterojos.webp",
        description: "Desean perfeccionar su técnica de maquillaje, centrándose específicamente en realzar la belleza de sus ojos de manera única.",
        detailedDescription: `Creé especialmente para ti este maravilloso Máster de Ojos, para que logres conocer y perfeccionar las últimas tendencias y técnicas de maquillaje llenas de color para tus ojos. Atrévete para que juntas saquemos todo ese talento y pasión que tienes por el maquillaje. ¡Te sorprenderás! y lo mejor, es que lo disfrutarás cada segundo.

Éste curso está dirigido a personas con conocimientos previos básicos que quieran aprender a maquillarse de forma más creativa, colorida y profesional.

¡Piérdele el miedo al color y sal de tu zona de confort!

Mi meta es poder enseñarte todos los trucos, darte los mejores tips y resolver todas tus dudas para que tu maquillaje se vea más colorido, más pulido y sobre todo, más creativo y profesional.

Lo que aprenderás:
- Asimetría de Cejas.
- Partes del Ojo. Aplicación de Sombras.
- Diferentes Tipos de Delineados.
- Maquillaje Full Color.
- Maquillaje Degradado.
- Maquillaje Ala de Ángel. (Editorial)
- Maquillaje Gold.
- Maquillaje Infinito.
- Pestañas Postizas.
- Tips Especiales.`,
        images: ["img/cursos/masterojos.webp"],
        type: "Curso",
        rating: 4.5,
        courseLink: "https://go.hotmart.com/N101804905B",
        buyCourseBtn: "https://go.hotmart.com/N101804905B?ap=10b6" 
    },
    {
        id: 43,
        name: "+500 Recetas KETO fáciles",
        precio: 83104,
        descuento: 49847,
        category: "cursos",
        subcategory: "salud",
        image: "img/cursos/keto.webp",
        description: "Descubre recetas para bajar de peso facilmente",
        detailedDescription: `Descubre “500 Recetas KETO fáciles”, la guía definitiva para llevar una alimentación baja en carbohidratos sin complicaciones. Encuentra desde desayunos rápidos hasta cenas completas, postres deliciosos y snacks prácticos, todos diseñados para ayudarte a mantenerte en cetosis y alcanzar tus objetivos de salud y bienestar.

Con instrucciones claras, ingredientes accesibles y preparaciones rápidas, este recetario es perfecto tanto para principiantes como para quienes ya siguen la dieta keto. ¡Disfruta de la comida que amas mientras cuidas tu cuerpo y transformas tu estilo de vida!

- Reduce la grasa corporal de manera natural.
- Disfruta de alimentos 100% cetogénicos, fáciles y deliciosos.
- Alcanza el estado de cetosis sin complicaciones ni conteo de macros.
- Observa cambios reales en tu cuerpo desde las primeras semanas.
- Olvídate de la pregunta: “¿Qué voy a comer hoy?”
- Recupera tu salud y mejora tu calidad de vida.
- Pierde peso mientras disfrutas comidas sabrosas y nutritivas.
- Lleva una alimentación balanceada y un estilo de vida saludable.
- Gana tranquilidad al alimentarte de forma correcta y consciente.
- Disminuye tus niveles de triglicéridos y colesterol.`,
        images: ["img/cursos/keto.webp", "https://placehold.co/400x300/90EE90/FFFFFF?text=Fitness+2"],
        type: "Curso",
        rating: 4.1,
        courseLink: "https://go.hotmart.com/X101797357W",
        buyCourseBtn: "https://go.hotmart.com/X101797357W?ap=109a" 
    },
    {
        id: 44,
        name: "Curso de Barber Shop Basics",
        precio: 500850,
        descuento: 207820,
        category: "cursos",
        subcategory: "belleza",
        image: "img/cursos/barber.webp",
        description: "Una profesión, un estilo de vida que sigue tendencias que evolucionan constantemente. En este MasterClass aprenderás desde cero ",
        detailedDescription: `¿Sabías que en los últimos años las barberías han ganado mayor popularidad dentro del mundo de la estética como oportunidad de negocio?

¿Eres consciente de que la preocupación de los hombres por verse cada día mejor ha crecido considerable y esto ha impactado en la aparición de nuevas barberías?

La barbería resulta ser más sencilla de lo que parece. Hoy en día es considerada más que una profesión, un estilo de vida que sigue tendencias que evolucionan constantemente. En este MasterClass aprenderás desde cero a:

- Tener a la mano herramientas básicas necesarias para el trabajo como un barbero exitoso.
- Tener claridad en la medida de las máquinas, que varían dependiendo del diseño el cual se desea realizar.
- Los estilos de corte más solicitados por los clientes y los que siguen las últimas tendencias.
- Aprender técnicas de barbería para realizar los cortes que siguen las últimas tendencias desde la comodidad de tu casa.
- Conocer los cortes más comunes en el mercado mediante una explicación paso a paso.
- Aprender y definir conceptos teóricos prácticos de la estética facial.
- Activar tu creatividad para crear los más innovadores y originales diseños basados en el degradado y desvanecido.
- Aprender el manejo de máquinas y peinados complementarios.
- Tener todo lo que necesitas saber con un curso orientado a principiantes que desean conocer el mundo de la barbería.
- Mejorar tus habilidades como barbero.
- Entender los conceptos básicos de la barbería, que te ayudarán a desarrollarse de forma óptima como barbero.`,
        images: ["img/cursos/barber.webp"],
        type: "Curso",
        rating: 4.7,
        courseLink: "https://go.hotmart.com/U101667185G?ap=3945",
        buyCourseBtn: "https://go.hotmart.com/U101667185G?ap=abf0" 
    },
    {
        id: 45,
        name: "Curso de creacion de moldes de silicona",
        precio: 207862,
        descuento: 103932,
        category: "cursos",
        subcategory: "emprendimientos",
        image: "img/cursos/moldes.webp",
        description: "El curso de moldes de silicona para emprender",
        detailedDescription: `Descubre el arte de crear tus propios moldes de silicona desde casa
Aprende paso a paso cómo elaborar moldes de silicona de manera fácil, práctica y creativa, sin necesidad de experiencia previa. Con esta guía, no solo desarrollarás una habilidad única, sino que también tendrás la oportunidad de convertirla en un negocio rentable en tan solo 30 días.

Imagina diseñar moldes personalizados para múltiples áreas y transformar tu creatividad en ingresos:

- Moldes de silicona de tipo alimenticio para pastelería y repostería
- Moldes de silicona para jabones artesanales
- Moldes de silicona para velas artesanales
- Moldes de silicona para figuras en yeso o cemento
- Moldes de silicona para figuras en porcelanicrón
- Moldes de silicona para proyectos en resina`,
        images: ["img/cursos/moldes.webp"],
        type: "Curso",
        rating: 5,
        courseLink: "https://go.hotmart.com/F101516781K",
        buyCourseBtn: "https://go.hotmart.com/F101516781K?ap=26f8" 
    },
    {
        id: 46,
        name: "Misión P7 El Plan para ganar en dólares con tu negocio en Internet",
        precio: 120000,
        descuento: 62359,
        category: "cursos",
        subcategory: "emprendimientos",
        image: "img/cursos/p7.webp",
        description: "Imagina crear tu propio negocio en internet que todos los días te permite ganar comisiones en dólares.",
        detailedDescription: `Descubre en vivo y en directo durante 7 días, 100% práctico el plan exacto que te llevará de la mano a construir tu negocio online, sin que tengas experiencia y sin importar tu edad o profesión.

Imagina crear tu propio negocio en internet que todos los días te permite ganar comisiones en dólares directamente a tu celular al comercializar productos digitales que se venden masivamente en todo el mundo.

Nuestra misión en este tallar en vivo durante 1 semana es entregarte todos los recursos, instrucciones y plantillas para que pases de 0 resultados a tus primeras ventas e ingresos en dólares.`,
        images: ["img/cursos/p7.webp"],
        type: "Curso",
        rating: 4.7,
        courseLink: "https://go.hotmart.com/L101667199D",
        buyCourseBtn: "https://go.hotmart.com/L101667199D?ap=205b" 
    },
    {
        id: 47,
        name: "RETO ELITE",
        precio: 480654,
        descuento: 207862,
        category: "cursos",
        subcategory: "salud",
        image: "img/cursos/elite.webp",
        description: "RETO ELITE! El Camino Científico y Natural hacia Tu Mejor Versión",
        detailedDescription: `Imagina mirarte al espejo dentro de unas semanas y reconocer esa versión de ti que siempre soñaste: más ligera, más fuerte, más feliz. RETO ELITE no es una dieta pasajera ni un reto improvisado; es un método probado, diseñado y supervisado por un equipo multidisciplinario de élite:

- Nutricionistas clínicos 
- Fisioterapeutas 
- Psicólogos especializados 
- Coaches motivacionales 

Lo que hace único a RETO ELITE:

Guías de alimentación y dietas especializadas 100% naturales, avaladas científicamente.

Sin pastillas, sin gotas, sin “productos mágicos” — solo resultados reales.

Planes específicos para sobrepeso y hipertensión diseñados para optimizar tu salud integral.

Resultados que obtendrás:

- Alcanzar y mantener tu peso ideal.
- Eliminar grasa abdominal y moldear tu figura.
- Recuperar tejidos y decir adiós a la flacidez.
- Reducir notablemente el estrés y la ansiedad.
- Adoptar hábitos alimenticios que transformarán tu vida para siempre.
- Beneficios exclusivos que recibes al unirte:
- Acompañamiento permanente vía Canal WhatsApp Premium con tu equipo de expertos.
- Acceso al grupo privado de alumnas para motivación y comunidad.
- Ebook 6 Secretos ELITE para Bajar de Peso.
- Seguimiento personalizado hasta lograr tu meta y tonificar tu cuerpo.
- Acceso de por vida a todos los materiales, guías y asesorías.
- No es solo un reto… es tu renacer. El momento es ahora. Tu salud y tu felicidad no esperan.`,
        images: ["img/cursos/elite.webp"],
        type: "Curso",
        rating: 4.7,
        courseLink: "https://go.hotmart.com/N101797379Q",
        buyCourseBtn: "https://go.hotmart.com/N101797379Q?ap=0de9" 
    },
    {
        id: 48,
        name: "Curso de Lifting de Pestañas YESS LACROIX",
        precio: 320658,
        descuento: 103932,
        category: "cursos",
        subcategory: "belleza",
        image: "img/cursos/lifting.webp",
        description: "Este tratamiento no puede faltar en el gabinete de las clínicas.",
        detailedDescription: `El Lifting de Pestañas se ha vuelto tendencia a nivel mundial por su durabilidad, simplicidad y comodidad.

Es una excelente alternativa para aquellas personas que desean lucir una mirada natural.

Ahorra tiempo, evita que el rímel se corra y suciedad causado por los restos de maquillaje.

Este tratamiento no puede faltar en el gabinete de las clínicas, de las peluquerías ni de las esteticistas. Ahora tienes esta herramienta al alcance de tu mano para poder generar otro ingreso económico y abrir tu abanico de servicios.

- 12 Clases Teóricas y Prácticas.
- 3hs de contenido de alta calidad.
- Manual y Protocolos en PDF.
- Grupo de Whatsapp con la Profesora.
- Acceso de por Vida.
- Certificado Internacional.`,
        images: ["img/cursos/lifting.webp"],
        type: "Curso",
        rating: 4.8,
        courseLink: "https://go.hotmart.com/S101667206R",
        buyCourseBtn: "https://go.hotmart.com/S101667206R?ap=4aab" 
    },
    {
        id: 49,
        name: "Curso Estilista Express",
        precio: 350740,
        descuento: 207820,
        category: "cursos",
        subcategory: "belleza",
        image: "img/cursos/estilista.webp",
        description: "Diseñado para todas aquellas personas amantes de la belleza",
        detailedDescription: `Este es un curso completo, diseñado para todas aquellas personas amantes de la belleza y la moda que quieren aprender el arte de la peluquería femenina como oportunidad de negocio paso a paso y fácilmente.

Con este curso lograrás:

- Aprender desde cero los cortes más básicos hasta las nuevas tendencias del estilismo.
- Desarrollar la destreza para diseñar cortes de pelo en mujeres.
- Alcanzar tus metas y darle seguridad económica a las personas que amas con excelentes ingresos.
- Adquirir competencias para ser altamente competitivo en el mundo laboral como empleado o independiente.`,
        images: ["img/cursos/estilista.webp"],
        type: "Curso",
        rating: 4.7,
        courseLink: "https://go.hotmart.com/W101667179V?ap=2f00",
        buyCourseBtn: "https://go.hotmart.com/W101667179V?ap=29e9" 
    },
    {
        id: 50,
        name: "Emprende como Masajista Profesional",
        precio: 490837,
        descuento: 365837,
        category: "cursos",
        subcategory: "emprendimientos",
        image: "img/cursos/masajes.webp",
        description: "Aquí encontrarás todo el masaje completo del cuerpo, los tratamientos más comunes que aparecen en los gabinetes",
        detailedDescription: `Este curso esta orientado a todo tipo de personas que quieran aprender la técnica de masoterapia para autoconocimiento, para sus familiares o bien como una salida laboral.

Sea cual fuere el motivo este curso te aporta una excelente preparación ya que te permite ir más allá de un músculo contracturado conectándote así con la necesidad y verdad del paciente. No se trata de realizar el mismo masaje para todo el mundo, sino incorporar este conocimiento integral para elegir un determinado masaje para cada persona y situación. Este abordaje te ubica en un lugar de profesionalismo.

Aquí encontrarás todo el masaje completo del cuerpo, los tratamientos más comunes que aparecen en los gabinetes, puntos y estiramientos que ayudan a aliviar el dolor más la relación de las emociones con la postura.

Siempre tendrás el acceso a consultas para acompañarte tanto en el proceso de aprendizaje del curso como en la atención de tus primeros pacientes.`,
        images: ["img/cursos/masajes.webp"],
        type: "Curso",
        rating: 4.6,
        courseLink: "https://go.hotmart.com/F101797389G",
        buyCourseBtn: "https://go.hotmart.com/F101797389G?ap=e675" 
    },
    {
        id: 51,
        name: "Curso de laminado de cejas",
        precio: 315650,
        descuento: 120000,
        category: "cursos",
        subcategory: "belleza",
        image: "img/cursos/cejas.webp",
        description: "Curso de Laminado de Cejas – La técnica que transforma miradas y multiplica tus ingresos.",
        detailedDescription: `El laminado de cejas se ha convertido en uno de los servicios de belleza más solicitados a nivel mundial, gracias a su capacidad de realzar la mirada con un acabado natural, definido y elegante. Con nuestro curso aprenderás desde cero a dominar esta técnica profesional, sin importar si eres principiante o ya tienes experiencia en el área de la estética.

En este curso descubrirás:

- La teoría y práctica del laminado de cejas, paso a paso.
- Técnicas para dar forma, volumen y fijación duradera.
- El uso correcto de productos y materiales de calidad.
- Procedimientos seguros para proteger y cuidar la piel y el vello.
- Consejos de diseño para lograr cejas perfectos según cada tipo de rostro.
- Estrategias para ofrecer el servicio de forma profesional y rentable.

Al finalizar, tendrás la confianza y las habilidades necesarias para brindar un servicio de alto nivel, aumentar tu clientela y generar ingresos adicionales con una de las tendencias más rentables en la industria de la belleza.`,
        images: ["img/cursos/cejas.webp"],
        type: "Curso",
        rating: 5,
        courseLink: "https://go.hotmart.com/W101804915X?ap=f458",
        buyCourseBtn: "https://go.hotmart.com/W101804915X?ap=7126" 
    },
];

// Variables globales
let currentProducts = [...products];
let visibleProducts = 12;
let currentCategory = 'all';
let currentSearch = '';
let currentCourseSubcategory = 'all-courses'; // Nueva variable para la subcategoría de cursos
const whatsappNumber = '3143152243'; // Tu número de WhatsApp

// Variables para el carrusel de miniaturas en los modales
let currentProductThumbnailIndex = 0;
let currentItemThumbnailIndex = 0;

// Variables para el tamaño y número de miniaturas, ajustadas dinámicamente
let THUMBS_PER_VIEW = 4;
let THUMB_WIDTH = 80;
const THUMB_GAP = 8;

// Función para configurar el número y tamaño de miniaturas según el ancho de la pantalla
function setThumbnailConfig() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) { // Para pantallas pequeñas (ej. móviles)
        THUMBS_PER_VIEW = 3;
        THUMB_WIDTH = 60;
    } else if (screenWidth < 768) { // Para pantallas medianas (ej. tablets pequeñas)
        THUMBS_PER_VIEW = 4;
        THUMB_WIDTH = 70;
    } else { // Para pantallas grandes
        THUMBS_PER_VIEW = 4;
        THUMB_WIDTH = 80;
    }
    // Actualizar variables CSS para que el CSS pueda usar estos valores
    document.documentElement.style.setProperty('--thumbs-per-view', THUMBS_PER_VIEW);
    document.documentElement.style.setProperty('--thumb-width', `${THUMB_WIDTH}px`);
}


// Inicializar la página
document.addEventListener('DOMContentLoaded', function () {
    // Configurar el tamaño de las miniaturas al cargar
    setThumbnailConfig();
    // Escuchar cambios de tamaño de ventana para ajustar las miniaturas
    window.addEventListener('resize', setThumbnailConfig);

    // Check URL for category parameter on load
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const subcategoryParam = urlParams.get('subcategory'); // Nuevo: Obtener parámetro de subcategoría

    if (categoryParam) {
        currentCategory = categoryParam;
        // Update active category button
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.classList.remove('bg-purple-600', 'text-white');
            btn.classList.add('bg-purple-100', 'text-purple-700');
            if (btn.dataset.category === currentCategory) {
                btn.classList.remove('bg-purple-100', 'text-purple-700');
                btn.classList.add('bg-purple-600', 'text-white');
            }
        });

        // Si la categoría es 'cursos', mostrar los filtros de subcategoría
        const courseSubcategoryFilters = document.getElementById('courseSubcategoryFilters');
        if (currentCategory === 'cursos') {
            courseSubcategoryFilters.classList.remove('hidden');
            if (subcategoryParam) {
                currentCourseSubcategory = subcategoryParam;
            } else {
                currentCourseSubcategory = 'all-courses'; // Default for courses
            }
            // Update active subcategory button
            document.querySelectorAll('.course-subcategory-filter').forEach(btn => {
                btn.classList.remove('bg-gray-700', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
                if (btn.dataset.subcategory === currentCourseSubcategory) {
                    btn.classList.remove('bg-gray-100', 'text-gray-700');
                    btn.classList.add('bg-gray-700', 'text-white');
                }
            });
        } else {
            courseSubcategoryFilters.classList.add('hidden');
        }

    } else {
        // Default to 'all' and highlight the 'Todos' button
        document.querySelector('.category-filter[data-category="all"]').classList.remove('bg-purple-100', 'text-purple-700');
        document.querySelector('.category-filter[data-category="all"]').classList.add('bg-purple-600', 'text-white');
        // Hide course subcategory filters if not on courses page
        document.getElementById('courseSubcategoryFilters').classList.add('hidden');
    }

    filterProducts();
    setupEventListeners();

    // Manejar el envío del formulario de contacto
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevenir el envío por defecto del formulario

            const form = event.target;
            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        Toastify({
                            text: "¡Mensaje enviado con éxito! Te responderemos pronto.",
                            duration: 3000,
                            close: true,
                            gravity: "top", // `top` or `bottom`
                            position: "right", // `left`, `center` or `right`
                            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                            stopOnFocus: true, // Prevents dismissing on hover
                        }).showToast();
                        form.reset(); // Limpiar el formulario
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwnProperty.call(data, 'errors')) {
                                Toastify({
                                    text: data["errors"].map(error => error["message"]).join(", "),
                                    duration: 3000,
                                    close: true,
                                    gravity: "top",
                                    position: "right",
                                    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                                    stopOnFocus: true,
                                }).showToast();
                            } else {
                                Toastify({
                                    text: "¡Oops! Hubo un problema al enviar tu mensaje.",
                                    duration: 3000,
                                    close: true,
                                    gravity: "top",
                                    position: "right",
                                    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                                    stopOnFocus: true,
                                }).showToast();
                            }
                        })
                    }
                })
                .catch(error => {
                    Toastify({
                        text: "¡Oops! Hubo un problema de conexión. Inténtalo de nuevo más tarde.",
                        duration: 3000,
                        close: true,
                        gravity: "top",
                        position: "right",
                        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                        stopOnFocus: true,
                    }).showToast();
                });
        });
    }
});

// Configurar event listeners
function setupEventListeners() {
    // Buscador
    document.getElementById('searchInput').addEventListener('input', function (e) {
        currentSearch = e.target.value.toLowerCase();
        filterProducts();
        document.getElementById('clearSearch').classList.toggle('hidden', !e.target.value);
    });

    // Limpiar búsqueda
    document.getElementById('clearSearch').addEventListener('click', function () {
        document.getElementById('searchInput').value = '';
        currentSearch = '';
        filterProducts();
        this.classList.add('hidden');
    });

    // Filtros de categoría
    document.querySelectorAll('.category-filter').forEach(button => {
        button.addEventListener('click', function () {
            currentCategory = this.dataset.category;
            // Reset subcategory when main category changes
            currentCourseSubcategory = 'all-courses';
            filterProducts();

            // Actualizar clase activa para categorías principales
            document.querySelectorAll('.category-filter').forEach(btn => {
                btn.classList.remove('bg-purple-600', 'text-white');
                btn.classList.add('bg-purple-100', 'text-purple-700');
            });
            this.classList.remove('bg-purple-100', 'text-purple-700');
            this.classList.add('bg-purple-600', 'text-white');

            // Mostrar u ocultar los filtros de subcategoría de cursos
            const courseSubcategoryFilters = document.getElementById('courseSubcategoryFilters');
            if (currentCategory === 'cursos') {
                courseSubcategoryFilters.classList.remove('hidden');
                // Activar el botón "Todos los Cursos" por defecto
                document.querySelector('.course-subcategory-filter[data-subcategory="all-courses"]').classList.remove('bg-gray-100', 'text-gray-700');
                document.querySelector('.course-subcategory-filter[data-subcategory="all-courses"]').classList.add('bg-gray-700', 'text-white');
            } else {
                courseSubcategoryFilters.classList.add('hidden');
                // Restablecer el estilo de todos los botones de subcategoría
                document.querySelectorAll('.course-subcategory-filter').forEach(btn => {
                    btn.classList.remove('bg-gray-700', 'text-white');
                    btn.classList.add('bg-gray-100', 'text-gray-700');
                });
            }
        });
    });

    // Filtros de subcategoría de cursos
    document.querySelectorAll('.course-subcategory-filter').forEach(button => {
        button.addEventListener('click', function () {
            currentCourseSubcategory = this.dataset.subcategory;
            filterProducts();

            // Actualizar clase activa para subcategorías de cursos
            document.querySelectorAll('.course-subcategory-filter').forEach(btn => {
                btn.classList.remove('bg-gray-700', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
            });
            this.classList.remove('bg-gray-100', 'text-gray-700');
            this.classList.add('bg-gray-700', 'text-white');
        });
    });

    // Ordenar
    document.getElementById('sortSelect').addEventListener('change', function () {
        sortProducts(this.value);
    });

    // Cargar más productos
    document.getElementById('loadMore').addEventListener('click', function () {
        visibleProducts += 12;
        renderProducts();
    });

    // --- Modal Event Listeners ---
    document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('productModal')) {
            closeProductModal();
        }
    });

    document.getElementById('closeItemModal').addEventListener('click', closeItemModal);
    document.getElementById('itemModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('itemModal')) {
            closeItemModal();
        }
    });

    // Event listeners para las flechas de miniaturas en los modales
    document.getElementById('prev-product-thumb-btn').addEventListener('click', () => navigateThumbnails('product', -1));
    document.getElementById('next-product-thumb-btn').addEventListener('click', () => navigateThumbnails('product', 1));
    document.getElementById('prev-item-thumb-btn').addEventListener('click', () => navigateThumbnails('item', -1));
    document.getElementById('next-item-thumb-btn').addEventListener('click', () => navigateThumbnails('item', 1));

    // Event listeners para la nueva modal de recordatorio
    const customReminderModal = document.getElementById('customReminderModal');
    const reminderCancelBtn = document.getElementById('reminderCancelBtn');
    const reminderOkBtn = document.getElementById('reminderOkBtn');

    reminderCancelBtn.addEventListener('click', () => {
        customReminderModal.classList.add('hidden');
    });

    // El botón OK de la modal de recordatorio se configurará dinámicamente en openItemModal
}

// Filtrar productos
function filterProducts() {
    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(currentSearch) ||
            product.description.toLowerCase().includes(currentSearch) ||
            (product.detailedDescription && product.detailedDescription.toLowerCase().includes(currentSearch));

        let matchesCategory = false;
        if (currentCategory === 'all') {
            matchesCategory = true;
        } else if (product.category === currentCategory) {
            matchesCategory = true;
        }

        let matchesSubcategory = true; // Por defecto, no se aplica filtro de subcategoría

        if (currentCategory === 'cursos') {
            if (currentCourseSubcategory === 'all-courses') {
                matchesSubcategory = true; // Mostrar todos los cursos
            } else {
                matchesSubcategory = product.subcategory === currentCourseSubcategory;
            }
        }

        return matchesSearch && matchesCategory && matchesSubcategory;
    });

    currentProducts = filtered;
    visibleProducts = 12;
    renderProducts();
}

// Ordenar productos
function sortProducts(criteria) {
    currentProducts.sort((a, b) => {
        switch (criteria) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'descuento':
                // Ordenar por el precio con descuento si existe, de lo contrario por el precio normal
                const descuentoA = a.descuento;
                const descuentoB = b.descuento;
                return descuentoA - descuentoB;
            case 'category':
                return a.category.localeCompare(b.category);
            default:
                return 0;
        }
    });
    renderProducts();
}

// Renderizar productos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const countElement = document.getElementById('productsCount');
    const loadMoreButton = document.getElementById('loadMore');

    const productsToShow = currentProducts.slice(0, visibleProducts);

    grid.innerHTML = productsToShow.map((product, index) => {
        let dataAttribute = '';
        // Incluir precio en los datos pasados al modal
        if (product.category === 'cursos') {
            dataAttribute = `data-item='${JSON.stringify({
                name: product.name,
                description: product.detailedDescription || product.description,
                images: product.images,
                type: 'Curso',
                duration_pages: product.duration_pages,
                rating: product.rating,
                courseLink: product.courseLink,
                descuento: product.descuento,
                precio: product.precio, // Pasa el precio original
                buyCourseBtn: product.buyCourseBtn // Pasa el enlace de compra
            })}'`;
        } else {
            dataAttribute = `data-product='${JSON.stringify({
                name: product.name,
                description: product.detailedDescription || product.description,
                images: product.images,
                descuento: product.descuento,
                precio: product.precio // Pasa el precio original
            })}'`;
        }

        const hasDiscount = product.precio && product.precio > product.descuento;
        const descuentoDisplay = hasDiscount ?
            `<span class="text-sm text-red-500 line-through mr-2">
                ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(product.precio)}
            </span>
            <span class="text-lg sm:text-xl font-bold text-purple-600">
                ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(product.descuento)}
            </span>` :
            `<span class="text-lg sm:text-xl font-bold text-purple-600">
                ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(product.descuento)}
            </span>`;

        const discountPercentage = hasDiscount ?
            `<span class="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 text-xs rounded-full font-bold">
                -${Math.round(((product.precio - product.descuento) / product.precio) * 100)}%
            </span>` : '';

        const categoryTag = product.category === 'tecnologia' ? '<span class="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 text-xs rounded">Tecnología</span>' :
            product.category === 'hogar' ? '<span class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs rounded">Hogar</span>' :
                product.category === 'cursos' ? '<span class="absolute top-3 left-3 bg-indigo-500 text-white px-2 py-1 text-xs rounded">Curso</span>' :
                    product.category === 'moda' ? '<span class="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs rounded">Moda</span>' :
                        product.category === 'belleza' ? '<span class="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 text-xs rounded">Belleza</span>' :
                            product.category === 'mascotas' ? '<span class="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 text-xs rounded">Mascotas</span>' : '';


        return `
            <div class="product-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer relative flex flex-col" ${dataAttribute} style="--animation-delay: ${index * 0.05}s;">
    <div class="relative">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 sm:h-56 md:h-64 object-cover">
        ${categoryTag}
        ${discountPercentage}
    </div>
    <div class="p-4 sm:p-6 flex flex-col flex-1">
        <h3 class="font-semibold text-base sm:text-lg mb-2">${product.name}</h3>
        <p class="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">${product.description}</p>
        
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto">
    <div>
        ${descuentoDisplay}
    </div>
    <button class="w-full sm:w-auto bg-purple-600 text-white px-4 py-2 sm:px-2 sm:py-1 rounded-md hover:bg-purple-900 transition duration-300 text-base sm:text-xs font-medium view-details-btn">
        Ver Detalles
    </button>
</div>

    </div>
</div>

        `;
    }).join('');

    countElement.textContent = `Mostrando ${productsToShow.length} de ${currentProducts.length} productos`;

    // Mostrar u ocultar botón de cargar más
    loadMoreButton.classList.toggle('hidden', visibleProducts >= currentProducts.length);

    // Attach click listeners ONLY to the "Ver Detalles" buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent event bubbling to parent elements
            const card = this.closest('.product-card');
            if (!card) return;

            const productDataStr = card.getAttribute('data-product');
            const itemDataStr = card.getAttribute('data-item');

            if (productDataStr) {
                try {
                    const productData = JSON.parse(productDataStr);
                    openProductModal(productData);
                } catch (e) {
                    console.error("Error parsing product data:", e);
                }
            } else if (itemDataStr) {
                try {
                    const itemData = JSON.parse(itemDataStr);
                    openItemModal(itemData);
                } catch (e) {
                    console.error("Error parsing item data:", e);
                }
            }
        });
    });

    // Animación de entrada para las tarjetas de productos
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Deja de observar una vez que es visible
            }
        });
    }, { threshold: 0.1 }); // El elemento es visible cuando el 10% de él está en el viewport

    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
}


// --- Product Modal Functions ---
const productModal = document.getElementById('productModal');
const modalProductMainImage = document.getElementById('modalProductMainImage');
const modalProductName = document.getElementById('modalProductName');
const modalProductDescription = document.getElementById('modalProductDescription');
const productThumbnailList = document.getElementById('product-thumbnail-list'); // Changed ID
const modalProductPrice = document.getElementById('modalProductPrice'); // Asegúrate de que este elemento exista en tu HTML
const contactProductBtn = document.getElementById('contactProductBtn');

function openProductModal(data) {
    modalProductName.textContent = data.name;
    // Usar innerHTML para que los saltos de línea y negritas se rendericen
    modalProductDescription.innerHTML = data.detailedDescription || data.description;
    modalProductMainImage.src = data.images[0];
    modalProductMainImage.alt = data.name;

    // Modificación para mostrar el precio con descuento en el modal de producto
    const hasDiscount = data.precio && data.precio > data.descuento;
    if (hasDiscount) {
        modalProductPrice.innerHTML = `
        <div class="flex flex-col">
            <span class="text-sm text-red-500 line-through mb-1">
                ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(data.precio)}
            </span>
            <span class="text-2xl font-bold text-purple-600">
                ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(data.descuento)}
            </span>
        </div>
    `;
    } else {
        modalProductPrice.textContent = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(data.descuento);
    }

    renderThumbnails('product', data.images); // Render thumbnails for product modal

    contactProductBtn.onclick = () => {
        const message = encodeURIComponent(`Hola, estoy interesado en el producto: *${data.name}*. ¿Podrías darme más información?`);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    productModal.classList.add('open');
}

function closeProductModal() {
    productModal.classList.remove('open');
}

// --- Item (Course) Modal Functions ---
const itemModal = document.getElementById('itemModal');
const modalItemMainImage = document.getElementById('modalItemMainImage');
const modalItemName = document.getElementById('modalItemName');
const modalItemDescription = document.getElementById('modalItemDescription');
const itemThumbnailList = document.getElementById('item-thumbnail-list'); // Changed ID
const modalItemType = document.getElementById('modalItemType');
const modalItemDurationPages = document.getElementById('modalItemDurationPages');
const modalItemRating = document.getElementById('modalItemRating');
const modalItemRatingValue = document.getElementById('modalItemRatingValue');
const modalItemPrice = document.getElementById('modalItemPrice'); // Added for descuento
const contactItemBtn = document.getElementById('contactItemBtn');
const viewCourseBtn = document.getElementById('viewCourseBtn');
const buyCourseBtn = document.getElementById('buyCourseBtn'); // Obtener el nuevo botón "Comprar Curso"

// Referencias a la nueva modal de recordatorio
const customReminderModal = document.getElementById('customReminderModal');
const reminderOkBtn = document.getElementById('reminderOkBtn');


function openItemModal(data) {
    modalItemName.textContent = data.name;
    // Usar innerHTML para que los saltos de línea y negritas se rendericen
    modalItemDescription.innerHTML = data.detailedDescription || data.description;
    modalItemMainImage.src = data.images[0];
    modalItemMainImage.alt = data.name;
    modalItemType.textContent = data.type;
    modalItemDurationPages.textContent = data.duration_pages;
    modalItemRatingValue.textContent = data.rating;

    // Modificación para mostrar el precio con descuento en el modal de curso
    const hasDiscount = data.precio && data.precio > data.descuento;
    if (hasDiscount) {
        modalItemPrice.innerHTML = `
            <span class="text-sm text-red-500 line-through mr-2">
                ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(data.precio)}
            </span>
            <span class="text-2xl font-bold text-purple-600">
                ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(data.descuento)}
            </span>
        `;
    } else {
        modalItemPrice.textContent = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(data.descuento);
    }
    // cursos ocultar
    // renderThumbnails('item', data.images); // Render thumbnails for item modal

    // Display rating stars (tu código existente)
    modalItemRating.innerHTML = '';
    const fullStars = Math.floor(data.rating);
    const hasHalfStar = data.rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        modalItemRating.appendChild(star);
    }
    if (hasHalfStar) {
        const halfStar = document.createElement('i');
        halfStar.className = 'fas fa-star-half-alt';
        modalItemRating.appendChild(halfStar);
    }
    const emptyStars = 5 - Math.ceil(data.rating);
    for (let i = 0; i < emptyStars; i++) {
        const star = document.createElement('i');
        star.className = 'far fa-star';
        modalItemRating.appendChild(star);
    }

    contactItemBtn.onclick = () => {
        const message = encodeURIComponent(`Hola, estoy interesado en el ${data.type.toLowerCase()}: *${data.name}*. ¿Podrías darme más información?`);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    if (data.courseLink) {
        // Comportamiento del botón "Ver Curso": muestra la modal de recordatorio
        viewCourseBtn.onclick = (event) => {
            event.preventDefault(); // Prevenir la redirección inmediata
            customReminderModal.classList.remove('hidden'); // Mostrar la modal personalizada

            // Configurar el botón "Aceptar" de la modal de recordatorio
            // para que redirija al courseLink cuando se haga clic
            reminderOkBtn.onclick = () => {
                customReminderModal.classList.add('hidden'); // Ocultar la modal
                window.open(data.courseLink, '_blank'); // Redirigir
            };
        };
        viewCourseBtn.classList.remove('hidden');

        // Comportamiento del botón "Comprar Curso": redirige directamente sin modal
        if (data.buyCourseBtn) { // Asegúrate de que buyCourseBtn exista
            buyCourseBtn.onclick = (event) => {
                event.preventDefault(); // Prevenir la redirección inmediata
                window.open(data.buyCourseBtn, '_blank'); // Redirigir directamente al buyCourseBtn
            };
            buyCourseBtn.classList.remove('hidden'); // Asegúrate de que el botón sea visible
        } else {
            buyCourseBtn.classList.add('hidden'); // Oculta el botón si no hay enlace de compra
        }

    } else {
        viewCourseBtn.classList.add('hidden');
        buyCourseBtn.classList.add('hidden'); // Oculta el botón si no hay enlace
    }

    itemModal.classList.add('open');
}

function closeItemModal() {
    itemModal.classList.remove('open');
}

// --- Thumbnail Carousel Functions ---

function renderThumbnails(modalType, images) {
    const thumbnailListElement = modalType === 'product' ? productThumbnailList : itemThumbnailList;
    const mainImageElement = modalType === 'product' ? modalProductMainImage : modalItemMainImage;

    thumbnailListElement.innerHTML = ''; // Clear previous thumbnails

    images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = `Vista ${index + 1}`;
        thumb.className = 'modal-thumbnail-item';
        if (index === 0) thumb.classList.add('active'); // Mark first as active
        thumb.addEventListener('click', () => {
            mainImageElement.src = imgSrc;
            // Remove active class from all and add to clicked one
            Array.from(thumbnailListElement.children).forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbnailListElement.appendChild(thumb);
    });

    // Reset index and update arrows for the specific modal
    if (modalType === 'product') {
        currentProductThumbnailIndex = 0;
    } else {
        currentItemThumbnailIndex = 0;
    }
    navigateThumbnails(modalType, 0); // Initialize position and arrow visibility
}

// Actualizar el año en el pie de página
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});


function navigateThumbnails(modalType, direction) {
    const thumbnailListElement = modalType === 'product' ? productThumbnailList : itemThumbnailList;
    const totalThumbnails = thumbnailListElement.children.length;
    let currentIndex = modalType === 'product' ? currentProductThumbnailIndex : currentItemThumbnailIndex;

    currentIndex += direction;

    // Clamp index to valid range
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalThumbnails - THUMBS_PER_VIEW) {
        currentIndex = totalThumbnails - THUMBS_PER_VIEW;
    }

    // Update global index
    if (modalType === 'product') {
        currentProductThumbnailIndex = currentIndex;
    } else {
        currentItemThumbnailIndex = currentIndex;
    }

    // Calcular el translateX usando los valores dinámicos de THUMB_WIDTH y THUMB_GAP
    const translateX = -currentIndex * (THUMB_WIDTH + THUMB_GAP);
    thumbnailListElement.style.transform = `translateX(${translateX}px)`;

    updateThumbnailArrows(modalType);
}

function updateThumbnailArrows(modalType) {
    const thumbnailListElement = modalType === 'product' ? productThumbnailList : itemThumbnailList;
    const prevButton = modalType === 'product' ? document.getElementById('prev-product-thumb-btn') : document.getElementById('prev-item-thumb-btn');
    const nextButton = modalType === 'product' ? document.getElementById('next-product-thumb-btn') : document.getElementById('next-item-thumb-btn');
    const totalThumbnails = thumbnailListElement.children.length;
    const currentIndex = modalType === 'product' ? currentProductThumbnailIndex : currentItemThumbnailIndex;

    // Show/hide prev button
    if (currentIndex > 0) {
        prevButton.classList.remove('hidden');
    } else {
        prevButton.classList.add('hidden');
    }

    // Show/hide next button
    if (totalThumbnails > THUMBS_PER_VIEW && currentIndex < totalThumbnails - THUMBS_PER_VIEW) {
        nextButton.classList.remove('hidden');
    } else {
        nextButton.classList.add('hidden');
    }
}
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup-container");
  const bar = document.querySelector(".fa-bars");
  const xIcon = document.querySelector(".fa-x");
  const body = document.querySelector("body");
  const popupMenuList = document.querySelectorAll(".a");

  popupMenuList.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "none";
      body.style.overflow = "auto";
    });
  });

  popup.style.display = "none";

  bar.addEventListener("click", () => {
    popup.style.display = "flex";
    body.style.overflow = "hidden";
  });

  xIcon.addEventListener("click", () => {
    popup.style.display = "none";
    body.style.overflow = "auto";
  });
  //   -------------
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    });
  });

  //   -------------
  const aboutLife = [
    {
      id: 1,
      title: "Bismillahir Rəhmanir Rəhim",
    },
    {
      id: 2,
      title:
        "Məsumlarımız və din rəhbərlərimizin mövlud və matəm mərasimlərini qeyd etmək, bu günlərdə onların şanlı həyat yollarına nəzər salıb yad etmək həm İslamımızın diri qalması,həm də mənəviyyatımızı zənginləşdirmək üçün bir vasitədir.",
    },
    {
      id: 3,
      title:
        "Müqəddəs Şəban ayı belə əlamətdar günlərlə zəngindir. Məsələn İmam Zeynül-abidin və Həzrət Əbülfəzl əleyhis-səlamlarınmövludunu misal çəkmək olar. Bu ayın ən əlamətdar günlərindən biri isə şəhidlər sərvəri İmam Hüseyn (ə)-ın mövludu günüdür (3 şəban). Biz bu yazıda İmam Hüseyn (ə)-ın həyatının ən üstün zirvəsi – Kərbəla hadisəsi, Aşura faciəsinin bəzi məqamlarına toxunacağıq. Məhərrəmlik məktəbini heç vaxt unutmamaq və həmişə yaşatmaq lazımdır, necə ki, İmam Zeynül-abidin (ə) buyurur: Hər gün Aşura və hər yer Kərbəladır.",
    },
    {
      id: 4,
      title:
        "Hər il Məhərrəmlik və xüsusilə Aşura günü yaxınlaşdıqca müsəlmanların qəlbində xüsusi coşqu, hal dəyişikliyi müşahidə olunur. Amma bu hislərin mahiyyəti, səbəbi nədir, Məhərrəm ayı, Aşura günü dedikdə biz nə başa düşürük? Yəqin ki, hamı söyləyəcək ki, bu gündə Peyğəmbər (s) övladı, İslam dünyasının üçüncü imamı, həzrət İmam Hüseyn ibn Əli (ə) qətlə yetirilib.",
    },
    {
      id: 5,
      title:
        "Yenə də meydana sual çıxır ki, bizim bu hadisənin təfsilatı, onu doğuran səbəblər və nəticələri barədə kifayət qədər məlumatımız varmı?",
    },
    {
      id: 6,
      title:
        " Bu məqalədə biz tarixə qısa səyahət edib bu hadisənin təfsilatını araşdırmağa çalışacağıq. Mövzumuza başlamazdan əvvəl bir neçə məqamı dəqiqləşdirməyi məqsədəuyğun hesab edirik. Yəni Məhərrəmlik nədir, Aşura nə deməkdir, Kərbəla nədir və harada yerləşir suallarına cavab vermək istərdik.",
    },
    {
      id: 7,
      title:
        "Məhərrəm – müsəlman təqvimində aylardan birinin adı, ilin birinci ayı və 4 haram aydan biridir. Bu haram aylarda hər bir savaş qadağan olunur.",
    },
    {
      id: 8,
      title:
        "Aşura –sözü ərəb dilindən tərcümədə ''on'' (10) deməkdir. Bizim anlamımızda Məhərrəm ayının 10-cu gününə təsadüf edən bu gündə Kərbəla faciəsi baş vermişdir.",
    },
    {
      id: 9,
      title:
        "Kərbəla – nədir və harada yerləşir suallarının cavabında isə bunu deyə bilərik ki, bu İraqda yerləşən quraqlıq bir çölün adıdır. Əlbəttə hal-hazırda ora böyük bir şəhərdir.",
    },
    {
      id: 10,
      title:
        "İmam Hüseyn (ə)-ın kimliyinə gəldikdə isə, bu şəxsiyyət haqqında dünya durduqca danışmaq olar və o, bütün məsumlarımız kimi dərkedilməz dərəcədə yüksək məqam sahibidir. Qısaca olaraq onu demək olar ki, o 4-cü hicri ilinin şəban ayının 3-ü Mədinə şəhərində mübarək gözlərini dünyaya açmışdır. Peyğəmbər tərbiyəsi görən İmam Hüseyn (ə) qardaşı Həsən (ə)-la uşaqlıqdan Peyğəmbər (s)-in qucağında böyümüş və onun nəfəsi ilə qidalanmışlar. Bu iki qardaş uşaq çağlarından istər həmyaşıdlarına, istərsə də böyüklərə əxlaq, iman, təqva nümunəsi olmuşlar. İmam Hüseyn (ə)-ın atası Əmirəl-möminin, Peyğəmbər (s)-in özündən sonra xalqa təyin etdiyi canişini və vəsisi Əli ibn Əbu Talib (ə), anası isə Rəsulullah (s)-in qızı həzrət Fatimə (s.ə)-dır.",
    },
    {
      id: 11,
      title:
        "50-ci (h.q) ildə qardaşı İmam Həsən (ə) Müaviyənin əmrinə əsasən öz həyat yoldaşı Cödənin əliylə xaincəsinə zəhərlənib şəhadətə yetişdikdən sonra 47 yaşında Allahın əmri və lütfü ilə Hüseyn (ə) imamətə yetişdi. 11 il ümmətə imamlıq etdikdən sonra İmam Hüseyn (ə) 61-ci (h.q) ilinin Məhərrəm ayının 10-cu günü susuz Kərbəla çölündə Yezid ibn Müaviyənin əmri ilə öz övladları və yaxınları ilə birlikdə qətlə yetirildi. Bu hadisənin təfsilatını izah etməzdən qabaq onu doğuran səbəbləri araşdırmaq lazımdır.",
    },
    {
      id: 12,
      title:
        "Əziz Peyğəmbərimiz həzrət Muhəmməd (s) vəfat etdikdən sonra onun vəsiyyətinə əməl olunmayaraq İmam Əli (ə) dövlətə rəhbərliyə buraxılmadı. Bu isə öz növbəsində İslam ümmətinin parçalanmasına gətirib çıxardı. Şəriət hökmlərini yetərincə bilməyən səriştəsiz və xalqa rəftarda kobudluq edən xilafət qəsbkarları öz bildikləri kimi yeni qurulmuş dövləti idarə etdilər. Ədalətsiz idarəçiliyin nəticəsində müsəlmanlar arasında ixtilaf başlandı və acınacaqlı bir vəziyyət yarandı. Nəticədə 2-ci və 3-cü xəlifələrin qətlindən sonra xalq 25 ildən sonra yenidən həzrət Əli (ə)-a müraciət etməli oldu və onu öz qanuni haqqı olan xilafətə dəvət etdi.",
    },
    {
      id: 13,
      title:
        "Lakin bu 25 il ərzində Peyğəmbər (s) risalətini unutmuş, fitnə-fəsada adət etmiş, cinayətkarlıqla var-dövlət toplamış adamlar Əli (ə)-ın ədalətli xilafətinə dözə bilməyib Müaviyə ibn Əbu Sufyanın təhriki ilə 40-cı ildə Ramazan ayının 21-də Əmirəl-möminin Əli (ə)-ı qətlə yetirdilər. Bu hadisənin özü də başqa söhbətin mövzusudur və bir çox ədəbiyyatda müxtəlif alimlər tərəfindən tam təfsilatı ilə əks olunmuşdur.",
    },
    {
      id: 14,
      title:
        "Həzrət Əli (ə) şəhadətə yetirildikdən sonra Böyük Yaradanın əmrilə onun böyük oğlu Həsən ibn Əli (ə) 37 yaşında imamətə yetişdi. Həzrət Əli (ə)-ın xilafətini qəbul etməyən və onunla mübarizə aparan Müaviyə ibn Əbu Süfyan bu dəfə də sakit durmadı. Müaviyənin hiylələri, yalançı vədləri və hədə-qorxuları nəticəsində onunla müharibəyə hazırlanan İmam Həsən (ə)-ın başçılıq etdiyi ordu son anda parçalandı və İmam (ə)-ı döyüş meydanında tək qoydu. Bu vəziyyətdə mənasız qırğının və İslam dininin aradan getməsinin qarşısını almaq məqsədilə İmam Həsən (ə) Müaviyə ilə sülh müqaviləsi bağlamağı lazım bildi.",
    },
  ];
  const aboutLifeList = document.querySelector(".about-life-list");
  aboutLife.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <li>
            <p>${element.title}</p>
        </li>
    `;
    aboutLifeList.appendChild(li);
  });
  //   --------------------------------------
  const karbalaData = [
    {
      id: 1,
      title:
        "Kərbəla döyüşü və ya Kərbəla hadisəsi — 10 oktyabr 680-ci ildə bugünkü Kərbəla şəhəri yaxınlığında İslam peyğəmbəri Məhəmmədin nəvəsi Hüseyn ibn Əli ilə Əməvi xəlifəsi I Yezid arasında baş vermiş döyüş. Bu döyüş İslam aləmində, xüsusən Şiə və Ələvilikdə böyük önəm daşıyır. Məhəmmədin qızı Fatimənin Əli bin Əbu Talibdən olan oğlu Hüseynin öldürülməsi Şiə ölkələrində hər il Aşura günü adı ilə qeyd olunur.",
    },
    {
      id: 2,
      title:
        "Məhəmməd peyğəmbərin 632-ci ildə vəfat etməsindən sonra xilafətin kim tərəfindən idarə olunması məsələsi yarandı. Müsəlmanların bir qismi ilk əvvəl Əbu Bəkr xəlifə təyin olunmasını istəyirdilər. Bu səbəbdən Səqifədə Əbu Bəkr Məhəmməd peyğəmbərdən sonra xəlifə təyin edilir. Əbu Bəkrin ardından Ömər ibn Xəttab, Osman ibn Əffan və sonda Əli bin Əbu Talib xəlifə seçilmişdir. Şiə müsəlmanları İmam Əli bin Əbu Talibin Məhəmməd peyğəmbərə hər halda daha yaxın olmasını, uşaqlıqda onun evində böyüməsini və həmçinin Qədir-Xum hadisəsini əsas gətirərək, ilk xəlifənin İmam Əli olmasını tələb edirdilər. Digər bir qrup müsəlman isə Əlinin xəlifə təyin edilməsinə qarşı çıxırdı. Ona qarşı səsləndirilən əsas fikirlərdən biri Əli bin Əbu Talib xəlifə təyin olunana qədər özündən əvvəlki digər üç xəlifədən fərqli olaraq, heç bir döyüşdə iştirak etməməsi və öz üsulu ilə Xilafəti idarə etməsi idi. Bununla onun özündən əvvəlki xəlifələri inkar etdiyi iddia olunurdu. Osman ibn Əffan 656-cı ildə öldürüldükdən sonra Əli bin Əbu Talib xəlifə təyin olundu. Osman ibn Əffanın tərəfdarları bunu tələsik addım hesab edərək, Əffanın qatilləri tapılmayana qədər Əli bin Əbu Talibin xəlifəliyini qəbul etməyəcəklərini açıqladılar. Bununla da İslam dünyasında ilk fikir ayrılığının əsas qoyuldu. Xilafətdə iki böyük siyasi güc formalaşmışdı. Bir tərəfdə Əli bin Əbu Talibin digər tərəfdə isə Əməvilərin nümayəndələri bir-birlərinə qarşı mübarizə aparırdılar. Əli bin Əbu Talib 661-ci ildə Xaricilərdən olan Əbdülrəhman ibn Mülcəm Muradinin sui-qəsdi nəticəsində şəhid edildi. Oğlu İmam Həsən ibn Əli Muctəba Xilafətdə 6 ay müddətində Xəlifə qaldıqdan sonra, daxili çəkişmələr səbəbindən məcburi sülh yolu ilə hakimiyyəti xəlifələrin qatı düşməni olan I Müaviyəyə təhvil verməli oldu.",
    },
    {
      id: 3,
      title:
        "I Müaviyə hakimiyyətdə olduğu müddətdə, Həsən ibn Əli ilə bağladığı sülhün şərtlərini pozaraq hakimiyyətdə olduğu müddətdə özündən sonra oğlu I Yezidin xəlifə təyin olunması çalışırdı. Tərəfdarlarına özündən sonra oğluna itaət etmələri barədə göstərişlər verirdi. 680-cı ildə I Müaviyənin vəfatından sonra I Yezid xəlifə təyin olundu. I Yezid xəlifə təyin olunan kimi Mədinə şəhərinin valisinə məktub göndərdi. Məktubda Yezid şəhər valisinin İmam Hüseynə deyil, ona tabe olmasın tələb edirdi. Əks halda, valini öldürməklə hədələyirdi. Vəziyyətin gərgin olduğu bu dövrlərdə İmam Hüseyn Kufə və Mədinə əhalisindən onu dəstəklədilərini bildirən məktublar alırdı. İmam Hüseyn Kufədə onu böyük bir kütlənin dəstəklədiyini və hakimiyyəti ələ keçirəcəyi halda, xalqın tam dəstəyinə sahib olaçağını düşünürdü. I Yezid dini sülalədən olmadığını və xalqın kimi dəstəklədiyni yaxşı anlayırdı. İmam Hüseyn 72 nəfər tərəfdarı ilə birlikdə Kufə istiqamətində yola çıxdı. Hədəfi İslam dünyasının xəlifəsi seçilmək və xilafəti düzgün şəkildə idarə etmək idi. İmam Hüseyn 72 nəfər tərəfdarı ilə irəliləyərkən I Yezidin 4.500 Və ya 30,000[1] nəfərlik ağır silahlarla silahlanmışdı qoşunu ilə qarşılaşdı. Tərəflər arasında yaşanan döyüşdə İmam Hüseyn başda olmaqla 72 nəfər şəhid edildi. İmam Hüseynin sağ qalan ailə üzvüləri və tərəfdarları isə əsir alındı.",
    },
    {
      id: 4,
      title:
        "Şiə və Ələvilik məzhəblərində bu hadisə böyük önəmə sahibdir. Şiəliyə görə Əli bin Əbu Talibdən sonra İmam Həsən sonra isə İmam Hüseyn xəlifə təyin olunmalı və ona hörmət göstərilməli idi. Şiəlikdə İmam Hüseynin özü və ailə üzvülərinin şəhid edilməsi hər ilk keçirilən müxtəlif mərasimlərdə xatırlanır. Bu mərasimlərdən ən mühümü isə Məhərrəm ayının 10-u keçirilən Aşura günüdür. Sünni məzhəbində Kərbəla döyüşündə şəhid olan şəxslər üçün dini tədbirlər keçirlmir. Ancaq, Sünnilikdə İmam Hüseynin öldürülməsi lənətlənir. Sünni mənbələrində İmam Hüseyn Məhəmməd peyğəmbərin nəvəsi və IV xəlifə Əli bin Əbu Talibin sevilmli oğlu kimi göstərilir. Onun I Yezid tərəfindən amansız şəkildə şəhid edilməsi, İslam qaydalarına zidd olduğu vurğulanır. İslam dinində olan məzhəblərin hamısında, Kərbəla hadisələrinə toxunulur. Bütün məzhəblər peyğəmbər nəslindən olan İmam Hüseynin şəhid edilməsini böyük günah hesab edilir.",
    },
    {
      id: 5,
      title:
        "Kərbəla hadisəsi İslamda olan məzhəblər tərəfindən eyni formada şərh edilmir. Bütün məzhəblər baş vermiş hadisələrin böyük günah olduğunu hesab etsə də, heç də hamısı, Kərbəla ilə bağlı müxtəlif dini tədbirlər təşkil etmirlər. Şiə və Sünni mənbələrində Kərbəla hadisələri şərh edilərkən, müxtəlif fikirlər göstərilir. Şiə mənbələrinə görə Məhəmməd peyğəmbər özündən sonra Əli bin Əbu Talibin daha sonra isə onun oğullarından birinin xəlifə olmasını istəyirdi. Lakin Əməvilərin təzyiqi nəticəsində I Müaviyə xəlifə seçildi. I Müaviyənin ölümündən sonra, ədaləti bərpa etmək üçün yeni bir şans yarandı. I Müaviyənin oğlu I Yezid İmam Hüseyn xəlifə seçilməsindən qorxurdu. Xalqın Hüseyni dəstəkləməsi və müxtəlif qəbilə başçılarından dəstək məktubları alması, Yezidin şübhələrini daha da artırdı. Bu məqsədlə I Yezid İmam Hüseynin yanına elçi göndərir.",
    },
    {
      id: 6,
      title:
        "Elçi Hüseynə I Yezidə tabe olmağı məsləhət görür. Əvəzində isə rədd cavabı alır. Şiə məzhəbində Hüseynin I Yezid təklifinin rədd etməsi, tam düzgün addım kimi göstərilir. Daha sonra Hüseyn Mədinə şəhərindən Məkkə şəhərinə Həcc ziyarətinə çıxır.",
    },
    {
      id: 7,
      title:
        "I Yezid Kufə əhalisinin Hüseyni dəstəklədiyni bilirdi. VII əsrdə Kufə şəhərində Şiə məzhəbindən olan Müsəlmanlar yaşayırdı. Kufə yarana biləcək etiraz dalğasını öncədən yatırmaq və öz mövqeylərini gücləndirmək məqsədi ilə I Yezid Übeydullah ibn Ziyadı şəhər valisi təyin etdi. Digər bir addım ilə isə şəhərə tam silahlanmış ordu göndərdi. Kufə əhalisinin döyüşə hazır olduğunu görən Ubeydullah bin Ziyad xalqın döyüşməkdənsə itaət etməyə dəvət etdi.",
    },
    {
      id: 8,
      title:
        "I Yezid vali təyin etdiyi Ubeydullah bin Ziyadı 30 minlik qoşunla Hüseynin üzərinə göndərdi. Hüseynin tərəfdarlarının düşərgəsi xilafət qoşunu tərəfindən mühasirəyə alınmışdı. İlk öncə Ubeydullah bin Ziyad danışıqlara başlamağı əmr etdi. Hüseynin danışıqlar zamanı mühasirənin qaldırılmasını və ailəsinin İraqdan çıxmasına şərait yaradılmasını istədi. Ordu başçısı Ömər bin Səd təkliflərini qəbul etdi və xəlifəliyə vəziyyətlə bağlı məlumat verdi. Təklif İbn Ziyadın xoşuna gəldi. Hüseynin ailəsinin və tərəfdarlarının İraqdan çıxarılması ilə Əməvilərin xəlifəliynə olan təhlükə aradan qalxırdı. Ancaq Əməvilərdən olan və xilafətin idarə edilməsində böyük rola sahib olan Şimir bin Zil-Çevşan, Behtari bin Rabia və Şeys bin Rabia bu təklifə qarşı çıxdılar. Onlar Hüseynin bununla vaxt qazandığını əgər İraqdan ayrılaçağı halda daha böyük bir tərəfdarla onların üzərlərinə gələcəklərini bildirdilər.",
    },
    {
      id: 9,
      title:
        "Məhərrəm ayının 7-ci günündə Ömər bin Səd mühasirədə saxlanılan ərazinin daha da kiçildilməsinə və düşərgəyə gedən su yollarının kəsilməsinə göstəriş verdi. Məhərrəm ayının 9-cu günündə düşərgənin su ehtiyatı tamam tükəndi və susluq problemi yarandı. Hüseynin qarşısında iki yol vardı ya I Yezidin vahid hakimiyyətini qəbul etməli ya da tərəfdarları ilə birlikdə şəhid olmalı idi. Hüseynin tərəfdarları ilə birlikdə səhərə qədər ibadət etmək üçün Ömər bin Səddan bir gün daha vaxt istədi. Ömər bin Səd əvvəlcə razılaşmasada, sonradan bir gecə vaxtı verdi.",
    },
    {
      id: 10,
      title:
        "Hüseyn tərəfdarlarına təslim olmaq kimi bir fikrinin olmadığını və sonuna qədər döyüşəcəklərini bildirdi. Saylarının düşmənə görə çox az olması səbəbindən qalib gəlmələrinin mümkünsüz olduğunu bildiyi üçün tərəfdarlarına gecə ibadəti zamanı istəyənin qaçmaqda sərbəst olduğunu bildirdi. Ancaq heç bir tərəfdar, qaçmadı və səhərə qədər ibadət etdilər.",
    },
  ];
  const karbalaList = document.querySelector(".karbala-list");
  karbalaData.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <li>
            <p>${element.title}</p>
        </li>
    `;
    karbalaList.appendChild(li);
  });
  //   --------------------------
  const wordsData = [
    {
      id: 1,
      title:
        "Doğrudan da, Allah-taalanın bəndələrini yaratmaqda məqsədi,özünü tanıtdırmaq olmuşdur. Sözsüz ki, Allahı həqiqi tanıyanlar.Ona ibadət edir və özlərini Ondan qeyrilərinin qarşısında aciz görmürlər.",
    },
    {
      id: 2,
      title:
        "Müsəlmanların dini hökmlərini bəyan etmək ruhanilərin öhdəsinə qoyulmuşdur. Onlar Allahın halal və haramını söyləməkdə əmanətdardırlar",
    },
    {
      id: 3,
      title:
        "Salam üçün ilahi dərgahında yetmiş savab nəzərdə tutulmuşdur ki, altımış doqquzu verənin, biri isə alanındır.",
    },
    {
      id: 4,
      title:
        "Bilin ki, insanların sizə olan ehtiyacı, Allahın sizə bəxş etdiyi nemətlərdəndir. Və (bunun qədrini bilib) belə bir nemətdən yorulmayın.(Yəni xeyirxah işlərdən yorulmayın).",
    },
    {
      id: 5,
      title:
        "Mənim bir qızım var onu necə adama ərə verim?» Həzrət Hüseyn (ə) buyurdu: «Onu Allahdan qorxan bir insana ərə ver. Çünki həmin şəxs qızını sevsə əzizləyəcək, amma qızından xoşu gəlməsə də ona əzab-əziyyət (zülm) etməyəcəkdir.",
    },
    {
      id: 6,
      title: "Qeybət etmə! Bil ki, qeybət cəhənnəm itlərinin yemidir.",
    },
    {
      id: 7,
      title:
        "Səninlə mübarizə etmək (özünü müdafiə etmək) üçün Allahdan başqa köməyi olmayan şəxsə zülm etməkdən çəkin (qorx)!",
    },
    {
      id: 8,
      title:
        "(Səndən kömək istəyən) ehtiyaclı şəxs, öz heysiyyətini itirmək təhlükəsiylə birgə sənə müraciət edir. Sən ona qarşı sayğılı ol (ehtiramla kömək et) ki, onun heysiyyətini qorumuş olasan!",
    },
    {
      id: 9,
      title:
        "Allahdan qorx! Elə bir şeyi iddia etmə ki, Allah sənə: «Yalan danışdın və doğru olmayanı idda etdin.» deyə, buyursun. Bil və agah ol, bizim şiələrimiz o insanlardır ki, qəlbləri hər cür ikiüzlülük,  kin və hiylədən pak olsun. Sən belə de: «Mən sizə ehtiram bəsləyən və sizi sevənlərdənəm.",
    },
    {
      id: 10,
      title:
        "Allah qorxusundan ağlamaq, cəhənnəm atəşindən qurtulmaq deməkdir.",
    },
  ];
  const wordsList = document.querySelector(".words-lists");
  wordsData.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <li>
            <p>${element.title}</p>
        </li>
    `;
    wordsList.appendChild(li);
  });
  //   --------------------page-flip--------------
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  prev.addEventListener("click", prevImg);
  next.addEventListener("click", nextImg);

  let second = document.getElementById("second");

  function prevImg() {
    second.style.msTransform = "rotateY(0deg)";
    second.style.webkitTransform = "rotateY(0deg)";
    second.style.transform = "rotateY(0deg)";
  }
  function nextImg() {
    second.style.msTransform = "rotateY(-180deg)";
    second.style.webkitTransform = "rotateY(-180deg)";
    second.style.transform = "rotateY(-180deg)";
  }
  const ashuraPage = [
    {
      id: 1,
      title:
        "Hz. Peyğəmbərin (s.ə.v) “əti mənim ətimdəndir” dediyi mübarək insan.",
    },
    {
      id: 2,
      title:
        "Cənnət gənclərinin əfəndilərindən olan Hz. Hüseyn (ə.s), xəlifəyə qarşı silahlı qiyama başlayan ilk imamdır.",
    },
    {
      id: 3,
      title:
        "Yezidin xəlifə olduğu dövr “şərab içən, meymunlarla yoldaşlıq edən, kişi və qadınlarla zina edən və bu halını xalqdan gizlətməyən” bir adamın dövrü idi. Sünnət artıq tamamilə tərk edilmiş, Qurandan uzaqlaşma gözlə görülən işlərə çevrilmişdi.",
    },
    {
      id: 4,
      title:
        "Bu şəraitdən narahat olan Kufəlilər, xəlifəsiz qaldıqlarını minlərlə məktubla Hz. Hüseynə (ə.s) bildirdilər. Məktubların sayı 15 minə çatanda xəlifə məqamına keçmək üçün addım atmaq xalqa qarşı məsuliyyətin bir göstəricisi olacaqdı.",
    },
    {
      id: 5,
      title:
        "Hz. Hüseyn (ə.s) də buna görə fəaliyyətə keçdi. Amma böyük qardaşı İmam Həsənə (ə.s) xəyanət edən Kufəlilər, “bizim xəlifəmiz ol” deyərək çağırdıqları Hz. Hüseynə (ə.s) də eyni xəyanəti etdilər.",
    },
    {
      id: 6,
      title:
        "Kufəyə doğru irəliləyərkən, Məkkə ilə Huneyn arasında Şair Fərəzdak ilə qarşılaşması və Fərəzdakın “Xalqın qəlbi sizinlədir, ancaq qılıncları əleyhinizədir” sözləri Kufəlilərdən görəcəyi rəftarı göstərirdi.",
    },
    {
      id: 7,
      title:
        "Hz. Peyğəmbər (s.ə.v) Hüseynin (ə.s)  anadan olmasından etibarən şəhid ediləcəyini bir çox hədisdə xəbər vermiş, hətta harada və kimin tərəfindən şəhid ediləcəyini də bildirmişdi.",
    },
    {
      id: 8,
      title:
        "Buna baxmayaraq, Hz. Hüseyn (ə.s)  bir an belə qorxu hiss keçirtmədən  şəhid ediləcəyi torpaqlara doğru yoluna davam etmişdir. Sanki bildiyi və gözlədiyi ölümə getməkdə idi.",
    },
    {
      id: 9,
      title:
        "Kərbəla hadisəsində əsas qayə isə Haqqı hakim qılmaqdır. Hz. Hüseyn (ə.s) İlahi-Kəlimətullah üçün ölümü belə əvvəlcədən nəzərə almışdı.",
    },
    {
      id: 10,
      title:
        "Öləcəyindən xəbərdar olması, yaşayacağı qədəri bilərək ona boyun əyməsi müdhiş bir təslimiyyətdir. Öldürüləcəyini bildiyi halda əl çəkmədiyi bu qətiyyətli qiyam, xəlifənin yanlışlarının ortaya çıxması, ümmətin oyanması və Quran əhkamına geri dönüşün başlanğıcıdır. Qiyamla başlayan bu proses qaranlıqların səhəridir ki, İmam canını bu yolda əsirgəməmişdi.",
    },
    {
      id: 11,
      title:
        "Burada Əhli-Beyt imamlarının bir imamdan digərinə keçən vəsiyyətindən bəhs etmək yerinə düşər.",
    },
    {
      id: 12,
      title:
        "“Allah, Nəbisinə vəfatından əvvəl bir yazı endirdi və dedi: ‘Ey Muhamməd! Bu, sənin soyundan seçilmişlərə ediləcək vəsiyyətdir.",
    },
    {
      id: 13,
      title:
        "Peyğəmbərimiz (s.ə.v): ‘Seçilmişlər kimlərdir, ey Cəbrayıl?’ – deyə soruşdu.",
    },
    {
      id: 14,
      title: "‘Əli ibn Əbu Talib və onun soyu’.",
    },
    {
      id: 15,
      title: "Yazının üzərində qızıldan möhürlər var idi.",
    },
    {
      id: 16,
      title:
        "Rəsulullah (s.ə.v) bu vəsiyyəti Əmirəlmömininə verdi. Bir möhrü açmasını və içərisində yazılı olanlara görə hərəkət etməsini əmr etdi. Əmirəlmöminin bir möhrü açdı və içində yazılı olan tövsiyyələrə uyğun olaraq yaşadı.",
    },
    {
      id: 17,
      title:
        "Sonra vəsiyyəti oğlu Həsənə (ə.s) verdi. Həsən (ə.s) möhürlərdən birini açdı və içində yazılı olan vəsiyyətə görə əməl etdi. Sonra vəsiyyət Hüseynə (ə.s) keçdi. Hüseyn (ə s) möhürlərdən birini açdı və orada bunların yazılı olduğunu gördü: Bir dəstə ilə bərabər şəhadətə çatmaq üçün hərəkətə keç. Onlar ancaq səninlə birlikdə olsa şəhadətə çata bilərlər. Özünü Allaha həsr et”.",
    },
    {
      id: 18,
      title:
        "Hz. Hüseyn (ə.s) bu yazılı vəsiyyətə görə əməl etmişdir. Kufəyə doğru irəliləyərkən, yanına gələn adamlara belə buyurmuşdur:",
    },
    {
      id: 19,
      title:
        "“Fəryadımızı eşitməməyiniz, qaraltımızı görməməyiniz üçün bu bölgədən uzaqlaşın. Çünki kim fəryadımızı eşidib və ya qaraltımızı görüb bizə bundan sonra yardım etməzsə, Allah Təalanın onu üzü üstə cəhənnəmə atmasına layiq olmuşdur”.",
    },
    {
      id: 20,
      title:
        "75 nəfərlik nur karvanı, Yezidin sərkərdəsi İbn Ziyadın başçılığı altında olan 30 min nəfərlik ordu ilə Kərbəla deyilən yerdə qarşılaşdı.",
    },
    {
      id: 21,
      title:
        "Bu ordudan ilk oxu heç kim ata bilmədi. Yaşanan qorxu, iman qarşısında küfrün əzilməsi idi. Nəticədə Allah Rəsulunun (s.ə.v) “oğlum” dediyi İmam Hüseyn Əfəndimiz (ə.s) şəhid edildi.",
    },
    {
      id: 22,
      title:
        "Kufəlilər Allahın ayəsinə qarşı əks getmək bahasına Yezidin gücündən qorxdular və İslamın ən böyük cinayətlərindən birini işlədilər. Yenə də gücün arxasında olmaq uğrunda Allahın ayəsinin əksinə gedən bir camaatın örnəyi…",
    },
    {
      id: 23,
      title: "Yenə az bir mənfəətə imanlarını satanların davranışı…",
    },
    {
      id: 24,
      title:
        "Böyük İmamın apardığı mübarizə zirvə nöqtəsində olan şücaətin isbatıdır.",
    },
    {
      id: 25,
      title:
        "“Humeyd ibn Müslim belə rəvayət etməkdədir: Bu günə qədər vücudunun müxtəlif yerlərindən yaralandığı, uşağı, ailəsi və yoldaşları gözünün önündə öldürüldüyü halda, onun kimi cəsarətini itirməyən, zərrə qədər bir qorxu əlaməti göstərməyən başqa birini heç görmədim. Piyada dəstələri ona hücum etdikləri zaman o da qılıncı ilə həmlə edir, qurdun keçi sürüsünə hücum edib sürünü iki yerə bölməsi kimi, sağından və solundan onları iki yerə yarırdı” (Əlamul Vera, c.1, səh. 67).",
    },
    {
      id: 26,
      title:
        "Kərbəla səhnəsinə əvvəlcə İmamın (ə.s) əshabı çıxdı. Özlərini ona sipər etmək üçün bir-birləri ilə yarışır, ölümə doğru qaçaraq gedirdilər.",
    },
    {
      id: 27,
      title:
        "Sonra isə Əhli-Beytin şəhadət şərbətini içmə növbəsi gəlib çatdı.",
    },
    {
      id: 28,
      title:
        "Əliyyül Əkbər, Müslim ibn Aqilin oğlu Abdullah, Hz. Qasım ibn Həsən, İmam Əlinin oğlu Ömər, İmam Əlinin digər oğlu Osman, Hz. Abdullah ibn Həsən, İmam Hüseynin (ə.s) qundaqdakı oğlu Əli Əsgər, Hz. Abbas şəhid edildilər.",
    },
    {
      id: 29,
      title:
        "İmamın mühafizəsi, cənnətə getməyin vəsiləsi və Cənabi Haqqın rizasına qovuşmanın yolu olmuşdur.",
    },
    {
      id: 30,
      title:
        "İmam Hüseyn (ə.s), apardığı misilsiz mübarizənin ardından Cümə günü günortadan sonra şəhid edildi. Şəhid edildiyi zaman 57 yaşında idi.",
    },
    {
      id: 31,
      title: "Şəhadət anında vücudunda 33 nizə və 34 qılınc yarası var idi.",
    },
    {
      id: 32,
      title:
        "Təəssüflər olsun ki, Səqifə kölgəliyində yaşananlar ilə dəyişməyə başlayan İslam nizamı xalqın arasında zamanla xoş qarşılanmış və xalq “Xəlifə belə edir, doğrudur” deyə danışmağa başlamışdır.",
    },
    {
      id: 33,
      title:
        "Allah Təala Quran və Sünnətdən yolunu azan xalqı düzəltmək üçün qanını və canını fəda edən İmam Hüseynin (ə.s) şəfaətindən ayırmasın. (Amin)",
    },
  ];
  const limitItems = () => {
    const maxItems = window.innerWidth >= 768 ? 16 : 4;
    return ashuraPage.slice(0, maxItems);
  };

  const limitItems2 = () => {
    const minItems = window.innerWidth >= 768 ? 16 : 5;
    return ashuraPage.slice(-minItems);
  };

  window.addEventListener("resize", () => {
    const itemsToShow = limitItems();
    const itemsToShow2 = limitItems2();
    console.log(itemsToShow);
    console.log(itemsToShow2);
  });

  const itemsToShow = limitItems();
  const itemsToShow2 = limitItems2();
  const ashuraList = document.querySelector(".ashura-list");
  const ashuraList2 = document.querySelector(".ashura-list2");

  itemsToShow.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <li>
            <p>${element.title}</p>
        </li>
    `;
    ashuraList.appendChild(li);
  });

  itemsToShow2.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <li>
            <p>${element.title}</p>
        </li>
    `;
    ashuraList2.appendChild(li);
  });
  //   ---------------------------slider----------------------------------
  const sliderImagesData = [
    {
      id: 1,
      image: "./images/ImamHussainPhoto/1.png",
      alt: "Imam Hussain",
    },
    {
      id: 2,
      image: "./images/ImamHussainPhoto/2.png",
      alt: "Imam Hussain",
    },
    {
      id: 3,
      image: "./images/ImamHussainPhoto/3.png",
      alt: "Imam Hussain",
    },
    {
      id: 4,
      image: "./images/ImamHussainPhoto/4.png",
      alt: "Imam Hussain",
    },
    {
      id: 5,
      image: "./images/ImamHussainPhoto/5.png",
    },
    {
      id: 6,
      image: "./images/ImamHussainPhoto/6.png",
      alt: "Imam Hussain",
    },
    {
      id: 7,
      image: "./images/ImamHussainPhoto/7.png",
      alt: "Imam Hussain",
    },
    {
      id: 8,
      image: "./images/ImamHussainPhoto/8.png",
      alt: "Imam Hussain",
    },
    {
      id: 9,
      image: "./images/ImamHussainPhoto/9.png",
      alt: "Imam Hussain",
    },
    {
      id: 10,
      image: "./images/ImamHussainPhoto/10.png",
      alt: "Imam Hussain",
    },
  ];
  const sliderContainer = document.querySelector(".slider-container");

  sliderImagesData.map((item) => {
    const sliderImages = document.createElement("img");
    sliderImages.classList.add("slider-image");
    sliderImages.style.width = "400px";
    if (innerWidth < 768) {
      sliderImages.style.height = "200px";
    }
    if (innerWidth > 768) {
      sliderImages.style.height = "300px";
    }
    sliderImages.src = item.image;
    sliderImages.alt = item.alt || "Slider image";
    sliderContainer.appendChild(sliderImages);
  });

  function cloneFirstToLast() {
    const firstItem = sliderContainer.firstElementChild.cloneNode(true);
    sliderContainer.appendChild(firstItem);
    sliderContainer.removeChild(sliderContainer.firstElementChild);
  }

  function autoScroll() {
    const containerWidth = sliderContainer.offsetWidth;
    const contentWidth = sliderContainer.scrollWidth;
    let scrollLeft = sliderContainer.scrollLeft;
    scrollLeft += 2;
    sliderContainer.scrollLeft = scrollLeft;
    if (scrollLeft + containerWidth >= contentWidth - 2) {
      cloneFirstToLast();
      sliderContainer.scrollLeft -= 300;
    }
  }

  let autoScrollInterval;

  function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 30);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  startAutoScroll();

  sliderContainer.addEventListener("mouseenter", stopAutoScroll);
  sliderContainer.addEventListener("mouseleave", startAutoScroll);
});

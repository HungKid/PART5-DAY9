const flashcards = [
    {
        word: "domestic (adj)",
        ipa: "/dəˈmestɪk/",
        meaning: "Nội địa",
        image: "images/images(word)/domestic.jpg",
        cloze: "d _ _ _ _ _ _ c",
        definition: "of or inside a particular country; not foreign or international",
        audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/dom/domes/domestic__us_2.mp3"
    },
    {
      word: "dozen",
      ipa: "/ˈdʌzn/",
      meaning: "Một tá (12 cái)",
      image: "images/images(word)/dozen.jpg",
      cloze: "d _ _ _ n",
      definition: "a group of twelve of the same thing",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/doz/dozen/dozen__us_3.mp3"
    },
    {
      word: "enthusiastically",
      ipa: "/ɪnˌθuːziˈæstɪkli/",
      meaning: "Nhiệt tình",
      image: "images/images(word)/enthusiastically.jpg",
      cloze: "e _ _ _ _ _ _ _ _ _ _ _ _ _ _ y",
      definition: "in a way that shows a lot of excitement and interest about somebody/something",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/e/ent/enthu/enthusiastically__gb_1.mp3"
    },
    {
      word: "separate",
      ipa: "/ˈkaʊn.tər/",
      meaning: "Quầy (thu ngân, bếp,...)",
      image: "images/images(word)/counter.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cou/count/counter__us_1.mp3"
    },
    {
      word: "sign",
      ipa: "/saɪn/",
      meaning: "Biển báo",
      image: "images/images(word)/sign.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sig/sign_/sign__us_1.mp3"
    },
    {
      word: "rug",
      ipa: "/rʌɡ/",
      meaning: "Tấm thảm",
      image: "images/images(word)/rug.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/rug/rug__/rug__us_1.mp3"
    },
    {
      word: "path",
      ipa: "/pɑːθ/",
      meaning: "Con đường nhỏ",
      image: "images/images(word)/path.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pat/path_/path__us_1.mp3"
    },
    {
      word: "drawer",
      ipa: "/drɔːr/",
      meaning: "Ngăn kéo",
      image: "images/images(word)/drawer.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/d/dra/drawe/drawer__us_1.mp3"
    },
    {
      word: "furniture",
      ipa: "/ˈfɜː.nɪ.tʃər/",   
      meaning: "Đồ nội thất",
      image: "images/images(word)/furniture.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fur/furni/furniture__us_2.mp3"
    },
    {
      word: "ladder",
      ipa: "/ˈlæd.ər/",
      meaning: "Cái thang",
      image: "images/images(word)/ladder.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/lad/ladde/ladder__us_1.mp3"
    },
    {
      word: "gloves",
      ipa: "/ɡlʌv/",
      meaning: "Găng tay",
      image: "images/images(word)/gloves.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/glo/glove/glove__us_1.mp3"
    },
    {
      word: "cart",
      ipa: "/kɑːt/",
      meaning: "Xe đẩy",
      image: "images/images(word)/cart.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/car/cart_/cart__us_1.mp3"
    },
    {
      word: "instrument",
      ipa: "/ˈɪnstrəmənt/",
      meaning: "Nhạc cụ",
      image: "images/images(word)/instrument.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/i/ins/instr/instrument__us_1.mp3"
    },
    {
      word: "package",
      ipa: "/ˈpækɪdʒ/",
      meaning: "Gói hàng",
      image: "images/images(word)/package.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pac/packa/package__us_1.mp3"
    },
    {
      word: "brick",
      ipa: "/brɪk/",
      meaning: "Viên gạch",
      image: "images/images(word)/brick.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bri/brick/brick__us_1.mp3"
    },
    {
      word: "apron",
      ipa: "/ˈeɪprən/",
      meaning: "Tạp dề",
      image: "images/images(word)/apron.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/apr/apron/apron__us_1.mp3"
    },
    {
      word: "railing",
      ipa: "/ˈreɪlɪŋ/",
      meaning: "Lan can",
      image: "images/images(word)/railing.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/r/rai/raili/railing__us_1.mp3"
    },
    {
      word: "fence",
      ipa: "/fens/",
      meaning: "Hàng rào",
      image: "images/images(word)/fence.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fen/fence/fence__us_1.mp3"
    },
    {
      word: "suitcase",
      ipa: "/ˈsuːtkeɪs/",
      meaning: "Va li",
      image: "images/images(word)/suitcase.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sui/suitc/suitcase__us_1.mp3"
    },
    {
      word: "cloth",
      ipa: "/klɔːθ/",
      meaning: "Khăn, miếng vải",
      image: "images/images(word)/cloth.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/clo/cloth/cloth__us_1.mp3"
    },
    {
      word: "podium",
      ipa: "/ˈpəʊdiəm/",
      meaning: "Bục phát biểu, bục trao giải",
      image: "images/images(word)/podium.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pod/podiu/podium__us_1.mp3"
    },
    {
      word: "patio",
      ipa: "/ˈpætiəʊ/",
      meaning: "Hiên, sân",
      image: "images/images(word)/patio.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/p/pat/patio/patio__us_1.mp3"
    },
    {
      word: "light fixture",
      ipa: "/laɪt/ /ˈfɪkstʃər/",
      meaning: "Đèn chiếu sáng",
      image: "images/images(word)/light-fixture.jpg",
      audio: ""
    },
    {
      word: "lab coat",
      ipa: "/læb/ /kəʊt/",
      meaning: "Áo phòng thí nghiệm",
      image: "images/images(word)/lab-coat.jpg",
      audio: ""
    },
    {
      word: "hook",
      ipa: "/hʊk/",
      meaning: "Cái móc",
      image: "images/images(word)/hook.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hoo/hook_/hook__us_1.mp3"
    },
    {
      word: "bulletin board",
      ipa: "/ˈbʊlətɪn bɔːrd/",
      meaning: "Bảng tin, bảng thông báo",
      image: "images/images(word)/bulletin-board.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/bul/bulle/bulletin_board_1_us_1.mp3"
    },
    {
      word: "tile",
      ipa: "/taɪl/",
      meaning: "Gạch lát",
      image: "images/images(word)/tile.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/til/tile_/tile__us_1.mp3"
    },
    {
      word: "handrail",
      ipa: "/ˈhændreɪl/",
      meaning: "Tay vịn cầu thang",
      image: "images/images(word)/handrail.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/han/handr/handrail__us_1.mp3"
    },
    {
      word: "tire",
      ipa: "/ˈtaɪər/",
      meaning: "Lốp xe",
      image: "images/images(word)/tire.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tir/tire_/tire__us_1.mp3"
    },
    {
      word: "utensil",
      ipa: "/juːˈtensl/",
      meaning: "Dụng cụ, đồ dùng",
      image: "images/images(word)/utensil.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/u/ute/utens/utensil__us_1.mp3"
    },
    {
      word: "carpet",
      ipa: "/juːˈtensl/",
      meaning: "Dụng cụ, đồ dùng",
      image: "images/images(word)/utensil.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/u/ute/utens/utensil__us_1.mp3"
    },
    {
      word: "cushion",
      ipa: "/ˈkʊʃn/",
      meaning: "Gối đệm, gối tựa",
      image: "images/images(word)/cushion.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cus/cushi/cushion__us_1.mp3"
    },
    {
      word: "filing cabinet",
      ipa: "/ˈfaɪlɪŋ kæbɪnət/",
      meaning: "Tủ đựng hồ sơ",
      image: "images/images(word)/filing-cabinet.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fil/filin/filing_cabinet_1_us_1.mp3"
    },
    {
      word: "shovel",
      ipa: "/ˈʃʌvl/",
      meaning: "Cái xẻng",
      image: "images/images(word)/shovel.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/s/sho/shove/shovel__us_1.mp3"
    },
    {
      word: "tent",
      ipa: "/tent/",
      meaning: "Cái lều",
      image: "images/images(word)/tent.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/ten/tent_/tent__us_1.mp3"
    },
    {
      word: "fishing rod",
      ipa: "/ˈfɪʃɪŋ rɑːd/",
      meaning: "Cần câu",
      image: "images/images(word)/fishing-rod.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/f/fis/fishi/fishing_rod_1_us_1.mp3"
    },
    {
      word: "lamp post",
      ipa: "/ˈlæmp pəʊst/",
      meaning: "Cột đèn",
      image: "images/images(word)/lamp-post.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/l/lam/lamp_/lamp_post_1_us_1.mp3"
    },
    {
      word: "bench",
      ipa: "/bentʃ/",
      meaning: "Ghế dài",
      image: "images/images(word)/bench.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/ben/bench/bench__us_1.mp3"
    },
    {
      word: "corner",
      ipa: "/ˈkɔːrnər/",
      meaning: "Góc",
      image: "images/images(word)/corner.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/c/cor/corne/corner__us_1.mp3"
    },
    {
      word: "gate",
      ipa: "/ɡeɪt/",
      meaning: "Cái cổng",
      image: "images/images(word)/gate.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/gat/gate_/gate__us_1.mp3"
    },
    {
      word: "tunnel",
      ipa: "/ˈtʌnl/",
      meaning: "Đường hầm",
      image: "images/images(word)/tunnel.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/t/tun/tunne/tunnel__us_2.mp3"
    },
    {
      word: "container",
      ipa: "/kənˈteɪnər/",
      meaning: "Hộp đựng, đồ đựng",
      image: "images/images(word)/container.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/x/xco/xcont/xcontainer__us_2.mp3"
    },
    {
      word: "jewellery",
      ipa: "/ˈdʒuːəlri/",
      meaning: "Đồ trang sức",
      image: "images/images(word)/jewellery.jpg",
      audio: "https://www.oxfordlearnersdictionaries.com/media/english/us_pron/j/jew/jewel/jewellery__us_1.mp3"
    }
  ];
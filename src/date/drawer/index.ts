const LeftDrawer = {
    drawersLeft: [
        { id: 1, name: '野菜',   bgPath: require("@images/1.jpg"), Content: '野菜，并非特指某种蔬菜，而是非人工种植的蔬菜，采集天地之灵气，吸取日月之精华，是大自然的宝藏之一。野菜有着纯净的品质，是大自然的美妙馈赠，也是人与自然相生相伴的见证。野菜无污染，营养丰富，清新可口，是绝佳的食材之一。'},
        { id: 2, name: '马齿苋', bgPath: require("@images/2.jpg"), Content: '马齿苋又名马齿菜（蚂蚱菜）、马齿草、五方草、长寿菜等。一般为红褐色，叶片肥厚，象倒卵形。它含有蛋白质、硫氨酸、核黄素、抗坏血酸、胡萝卜素等营养物质。由于其中含酸类物质比较多，所以吃的时候会觉得稍有些酸味。'},
        { id: 3, name: '艾蒿',   bgPath: require("@images/3.jpg"), Content: '艾蒿又名棉花草，功效与作用：散寒止痛，温经止血。鲜嫩艾草包水饺、艾草叶煮面、艾草褒鸡、艾草煮鸡蛋艾蒿可以炒肉吃，也可以凉拌，艾草可以用来泡水。'},
        { id: 4, name: '车前草', bgPath: require("@images/4.jpg"), Content: '车前草功能应用 清热利尿，凉血，解毒。主治热结膀胱，小便不利，淋浊带下，暑湿泻痢，衄血，尿血，肝热目赤，咽喉肿痛，痈肿疮毒。'},
        { id: 5, name: '蒲公英', bgPath: require("@images/5.jpg"), Content: '蒲公英又名黄花苗、婆婆丁、黄花地丁等，为菊科植物蒲公英带根全草，多生于山坡、田边、路旁、河滩及旷野中，全国各地均有野生分布。'},
        { id: 6, name: '苣荬菜', bgPath: require("@images/6.jpg"), Content: '苣荬菜俗名为取麻莱、苦麻子，是我国食用历史悠久的一种野菜。此外它还具有清热解毒、凉血利湿、消肿排脓、祛痰止痛、补虚止咳之功效。对浸润性肝炎等疾病有一定的疗效。'},
        { id: 7, name: '苦碟子', bgPath: require("@images/7.jpg"), Content: '苦碟子春季生于山脚、路边、疏林内、河边。'},
        { id: 8, name: '野蒜',   bgPath: require("@images/8.jpg"), Content: '野蒜又名薤白、薤根，藠子，小独蒜，薤白头小蒜、小根菜：呈不规则卵圆形，表面黄白色或淡黄棕色，底部有突起的鳞茎盘。'},
    ],
    drawersMiddle: [
        { id: 9, name: '灰菜',      bgPath: require("@images/8.jpg"), Content: '灰菜富含蛋白质、多种维生素及钾、钙、磷等微量元素，还含有稀有的促脱皮甾酮、鞣质成份，具有抗癌、清热、减肥等功效，并对流感、乙型脑炎病毒等有明显的抑制作用。'},
        { id: 10, name: '苋菜',     bgPath: require("@images/7.jpg"), Content: '苋菜俗称西甜骨，是一种开绿白色小花的野菜，俗称“人青草”，春夏之季在我国南北各地均有野生，而食用则以春天所萌发的嫩叶为佳。'},
        { id: 11, name: '榆钱',     bgPath: require("@images/6.jpg"), Content: '榆钱是榆树的果实，当春暖花开之际，榆树枝头会生长出一簇簇状如铜钱的嫩绿果实，人们把它叫榆钱。榆钱也是餐桌上的一道好食品。'},
        { id: 12, name: '猪毛菜',   bgPath: require("@images/5.jpg"), Content: '猪毛菜别名扎蓬棵、刺蓬、三叉明棵、猪毛缨、叉明棵、猴子毛、蓬子菜、乍蓬棵子、蓬豆芽、轱辘娃子。'},
        { id: 13, name: '刺槐花',   bgPath: require("@images/4.jpg"), Content: '刺槐花又名：洋槐、胡藤，落叶乔木或灌木，高至25米左右。树皮褐色，有深裂槽；枝上具刺针。'},
        { id: 14, name: '马齿苋',   bgPath: require("@images/3.jpg"), Content: '黃花菜别名：萱草、忘忧草、金针菜、萱草花、健脑菜、安神菜、绿葱、鹿葱花、萱萼。'},
        { id: 15, name: '秋水仙',   bgPath: require("@images/2.jpg"), Content: '新鲜黄花菜中含有秋水仙碱,可造成胃肠道中毒症状,故不能生食,须加工晒干,吃之前先用开水焯一下,再用凉水浸泡2小时以上,食用时火力要大,彻底加热,每次食量不宜过多。'},
        { id: 16, name: '泰坦魔芋', bgPath: require("@images/1.jpg"), Content: '泰坦魔芋——学名Amorphophallus泰坦魔芋是世界上最高的花，它将再度开放。泰坦魔芋的花（其实是它的花序）在完全长成时，可以达到10英尺（3米）高。人们通常称之为“尸香魔芋”。'},
        { id: 17, name: '野蒜',     bgPath: require("@images/8.jpg"), Content: '野蒜又名薤白、薤根，藠子，小独蒜，薤白头小蒜、小根菜：呈不规则卵圆形，表面黄白色或淡黄棕色，底部有突起的鳞茎盘。'},
        { id: 18, name: '蒲公英',   bgPath: require("@images/7.jpg"), Content: '蒲公英又名黄花苗、婆婆丁、黄花地丁等，为菊科植物蒲公英带根全草，多生于山坡、田边、路旁、河滩及旷野中，全国各地均有野生分布。'},
    ],
    drawersRight: [
        { id: 19, name: '车前草',   bgPath: require("@images/8.jpg"), Content: '野蒜又名薤白、薤根，藠子，小独蒜，薤白头小蒜、小根菜：呈不规则卵圆形，表面黄白色或淡黄棕色，底部有突起的鳞茎盘。'  },
        { id: 20, name: '野蒜',     bgPath: require("@images/7.jpg"), Content: '车前草功能应用 清热利尿，凉血，解毒。主治热结膀胱，小便不利，淋浊带下，暑湿泻痢，衄血，尿血，肝热目赤，咽喉肿痛，痈肿疮毒。'  },
        { id: 21, name: '榆钱',     bgPath: require("@images/6.jpg"), Content: '榆钱是榆树的果实，当春暖花开之际，榆树枝头会生长出一簇簇状如铜钱的嫩绿果实，人们把它叫榆钱。榆钱也是餐桌上的一道好食品。'  },
        { id: 22, name: '蒲公英',   bgPath: require("@images/5.jpg"), Content: '蒲公英又名黄花苗、婆婆丁、黄花地丁等，为菊科植物蒲公英带根全草，多生于山坡、田边、路旁、河滩及旷野中，全国各地均有野生分布。'  },
        { id: 23, name: '新鲜黄花', bgPath: require("@images/3.jpg"), Content: '新鲜黄花菜中含有秋水仙碱,可造成胃肠道中毒症状,故不能生食,须加工晒干,吃之前先用开水焯一下,再用凉水浸泡2小时以上,食用时火力要大,彻底加热,每次食量不宜过多。'  },
        { id: 24, name: '猪毛菜',   bgPath: require("@images/2.jpg"), Content: '猪毛菜别名扎蓬棵、刺蓬、三叉明棵、猪毛缨、叉明棵、猴子毛、蓬子菜、乍蓬棵子、蓬豆芽、轱辘娃子。'  },
    ],
    allLfet: function () { return this.drawersLeft },
    allMiddle: function () { return this.drawersMiddle },
    allRight: function () { return this.drawersRight },
    all: function () { return this.drawersLeft.concat(this.drawersMiddle, this.drawersRight)}
}

export default LeftDrawer
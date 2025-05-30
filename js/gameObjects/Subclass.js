function createClericSubclasses() {
    let death = new Subclass("Dominio de la muerte", "You nourish your faith on the forces that create the dead and give rise to the undead.",
                             "../recursos/subclass/150px-Class_Cleric_Death_Badge_Icon.png", [new Weapon("Martial")], [], [new Feature("Reaper", "Los trucos de necromancia que solo atacan a una perona pueden atacar a alguien adicional", "")]);

    let knowledge = new Subclass("Dominio del conocimiento", "Adaptable and adroit in all manner of languages and skills, your mind is an intellectual cup brimming with exquisite knowing.",
                                 "../recursos/subclass/150px-Class_Cleric_Knowledge_Badge_Icon.png", null, [], [new Feature("Blessings of Knowledge", "Gana proficiencia en dos de estas habilidades: Arcana, Historia, Naturaleza o Religión", "")]);

    let life = new Subclass("Dominio de la vida", "Tasked with the holy edict of preserving the body, mind, and soul, your god grants you a plethora of healing magics.",
                            "../recursos/subclass/150px-Class_Cleric_Life_Badge_Icon.png", [new Armor("Armadura Pesada")], [], [new Feature("Disciplina de la vida", "Cuando conjures un hechizo curativo, el aliado recupera vida igual a 2 + el nivel del hechizo"), ""]);

    let light = new Subclass("Dominio de la luz", "Gods of primordial flame bathe you in resplendent light, providing magics to dispel darkness and immolate enemies.",
                             "../recursos/subclass/150px-Class_Cleric_Light_Badge_Icon.png", null, [], [new Feature("Bengala de protección", "Usa tu reacción para dar desventaja al atacante", "")]);
    let nature = new Subclass("Dominio de la naturaleza", "You embody the vast viridian power of the natural world, an avatar of the subtle divinity of fruitfall, avian migration, woodland silence, and the landslide's roaring fury.",
                              "../recursos/subclass/150px-Class_Cleric_Nature_Badge_Icon.png", [new Armor("Armadura Pesada")], [], []);
    let tempest = new Subclass("Dominio de la Tempestad", "Your faith has made you the very thunder that quakes the black firmament, the lightning coursing through the veins of a terrible storm.",
                               "../recursos/subclass/150px-Class_Cleric_Tempest_Badge_Icon.png", [new Armor("Armadura Pesada"), new Weapon("Marical")], [], [new Feature("Ira de la tormenta", "Como reacción puedes contraatacar haciendo 2d8 de daño")]);
    let trickery = new Subclass("Dominio del fraude", "You wield the unorthodox divine tools of deceit and illusion in worship of your chosen deity.",
                                "../recursos/subclass/150px-Class_Cleric_Trickery_Badge_Icon.png", [], [], [new Feature("Bendición del Tramposo", "Otorga a otra criatura ventaja en sigilo", "")]);
    let war = new Subclass("Dominio de la guerra", "Fortified by holy zeal, you brandish an arsenal of sacramental savagery to use against those you deem unrighteous.",
                            "../recursos/subclass/150px-Class_Cleric_War_Badge_Icon.png", [new Armor("Armadura pesada"), new Weapon("Martian")], [], [new Feature("Sacerdote de la guerra", "Cuando haces un ataque con o sin arma puedes gastar una carga de sacerdote para hacer un ataque adicional")]);

    return [death, knowledge, life, light, nature, tempest, trickery, war];
}

function createPaladinSubclasses() {
    let devotion = new Subclass("Juramento de Devoción", "Following the ideal of the knight in shining armour, you act with honour and virtue to protect the weak and pursue the greater good.",
                                "../recursos/subclass/150px-Class_Paladin_Devotion_Badge_Icon.png", null, null, [new Feature("Santa represión", "Crea un aura que hace 1d4 de daño radiante", "")]);
    let ancients = new Subclass("Juramento de los Antiguos", "You fight on the side of light in the cosmic struggle against darkness to preserve the sanctity of life and the beauty of nature.",
                                "../recursos/subclass/150px-Class_Paladin_Ancients_Badge_Icon.png", null, null, [new Feature("Resplandor curativo", "Curate y a todos los aliados cercanos", "")]);
    let crown = new Subclass("Juramento de la corona", "You have sworn yourself to the ideals of civilisation, serving the laws that hold society together and preserving the order they command.",
                             "../recursos/subclass/150px-Class_Paladin_Crown_Badge_Icon.png", null, null, [new Feature("Claridad Justa", "Otorga bonus de proficiencia a los ataques")]);
    let vengance = new Subclass("Juramento de la venganza", "You have set aside even your own purity to right wrongs and deliver justice to those who have committed the most grievous sins.",
                                "../recursos/subclass/150px-Class_Paladin_Vengeance_Badge_Icon.png", null, null, [new Feature("Valor del inquisidor", "You have set aside even your own purity to right wrongs and deliver justice to those who have committed the most grievous sins.", "")]);

    return [devotion, ancients, crown, vengance];
}

function createSorcererSubclasses(){
    let draconicBloodline = new Subclass("Linaje dracónico", "Your veins carry draconic magic, the result of a powerful dragon ancestor.",
                                         "../recursos/subclass/150px-Class_Sorcerer_Draconic_Bloodline_Badge_Icon.png", null, null, [new Feature("Resistencia dracónica", "Cuando no llevas armadura tu defensa base es 13", "")]);
    let shadowMagic = new Subclass("Magia de las sombras", "You siphon your powers from the Shadowfell itself, the light in your soul snuffed out by an unsettling darkness.",
                                   "../recursos/subclass/150px-Class_Sorcerer_Shadow_Magic_Badge_Icon.png", null, null, [new Feature("Resistencia Implacable", "Baja a 1 punto de vida en vez de ser tumbado, una vez por descanso largo", "..recursos/features/RelentlessEndurance.png"), new Feature("Ojos de la oscuridad", "Puedes ver en la oscuridad hasta 80 pies")]);
    let stormSorcery = new Subclass("Brujería de la tormenta", "Whether crackling with the energy of ancient deluges or pierced by gales and hurricanes, your lineage is a strange tapestry scrawled by a tempest.",
                                    "../recursos/subclass/150px-Class_Sorcerer_Storm_Sorcery_Badge_Icon.png", null, null, [new Feature("Magia de Tempestad", "Despues de conjurar un hechizo de nivel 1 o mayor puedes volar hasta 30ft")]);
    let wildMagic = new Subclass("Magia Salvaje", "Your powers come from ancient forces of chaos. They churn within you - waiting to burst free at any time.",
                                 "../recursos/subclass/150px-Class_Sorcerer_Wild_Magic_Badge_Icon.png", null, null, [new Feature("Magia salvaje", "Acciona un efecto aleatorio despues de conjurar un hechizo de nivel 1 o mayor"), new Feature("Marea del Caos", "Activa para consegui ventaja en tu siguiente tiro y aumenta la posibilidad de activar magia salvaje")]);
    return [draconicBloodline, shadowMagic, stormSorcery, wildMagic];
}

function createWarlockSubclass() {
    let archfey = new Subclass("Archihada", "Graced by a lady or lord of the fey, you are imbued with all the sumptuous and scary qualities of your patron's extraordinary realm.",
                               "../recursos/subclass/150px-Class_Warlock_Archfey_Badge_Icon.png", null, [], [new Feature("Presencia de Hada", "Encanta o aterroriza enemigos cercanos")]);
    let fiend = new Subclass("Demonio", "You have pledged your soul to the Hells or Abyss in return for a deadly arsenal of fiendish arcana.",
                             "../recursos/subclass/150px-Class_Warlock_Fiend_Badge_Icon.png", null, [], [new Feature("Bendicion del Oscuro", "Cuando matas a una criatura añade a tu vida tu modificador de carisma + nivel de brujo")]);
    let oldOne = new Subclass("El gran anciano", "You pledged something unthinkable to an unspeakably ancient entity - which in return furnished you with powers of cerebral entropy and control.",
                              "../recursos/subclass/150px-Class_Warlock_Great_Old_One_Badge_Icon.png", null, [], [new Feature("Recordatorio Mortal", "Cuando haces un ataque crítico, las criaturas cercanas se aterrorizan")]);
    let hexblade = new Subclass("La espada maldecida", "You have made your pact with a mysterious entity from the Shadowfell - a force that manifests in sentient magic weapons carved from the stuff of shadow.",
                                "../recursos/subclass/150px-Class_Warlock_Hexblade_Badge_Icon.png", null, [], [new Feature("Guerrero maldecido", "Consigues proficiencia con armadura media, escudos y armas marciales"), new Feature("Maldecir arma", "Consigues proficiencia en ese arma y no lo puedes perder"), new Feature("Maldición de la espada", "Ganas un bonus igual al bonus de proficiencia, la tirada que necesitas se reduce por 1 y te cura si matas al enemigo")]);
    return [archfey, fiend, oldOne, hexblade];
}

class Subclass {
    constructor(name, desc, image, proficiencies, spells, features) {
        this._name = name;
        this._desc = desc;
        this._image = image;
        this.proficiencies = proficiencies;
        this.spells = spells;
        this.features = features;
    }
    get name(){
        return this._name;
    }
    get desc(){
        return this._desc;
    }
    get img(){
        return this._image;
    }
}
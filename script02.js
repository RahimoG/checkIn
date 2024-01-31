var persons;
persons = getData();
if(persons === null)
{
    persons = [
        { name : "Amel ramdane",  Class: 'A', isChecked: false },
        { name : "BALLAH Abderrahmane", Class: 'A', isChecked: false },
        { name : "Farid hadada", Class: 'A', isChecked: false },
        { name : "Ghania BOUKHATEM",  Class: 'A', isChecked: false },
        { name : "Hadjadji kawter", Class: 'A', isChecked: false },
        { name : "Hani Fatima", Class: 'A', isChecked: false },
        { name : "Rayane Bounab", Class: 'A', isChecked: false },
        { name : "Rouas Aimen", Class: 'A', isChecked: false },
        { name : "Soudjoud Boumaza", Class: 'A', isChecked: false },
        { name : "Dehane Amel", Class: 'A', isChecked: false },
        { name : "Boualem CHEBIRA", Class: 'A', isChecked: false },
        { name : "Mr manaa djamel", Class: 'A', isChecked: false },
        { name : "omar belmeguenai", Class: 'A', isChecked: false },
        { name : "Djebabla Abd Elhak", Class: 'A', isChecked: false },
        { name : "LARABA Abdelaziz", Class: 'A', isChecked: false },
        { name : "samir benmoussa", Class: 'A', isChecked: false },
        { name : "amoura kamel", Class: 'A', isChecked: false },
        { name : "Réda DJAOUAHDOU", Class: 'A', isChecked: false },
        { name : "FERIEL BOUKHEROUFA", Class: 'A', isChecked: false },
        { name : "Yazid Hadidane", Class: 'A', isChecked: false },
        { name : "abir belhouane",  Class: 'B', isChecked: false },
        { name : "Ahmed Boulemden",  Class: 'B', isChecked: false },
        { name : "Besma Boudiaf",  Class: 'B', isChecked: false },
        { name : "Bilal Dendani",  Class: 'B', isChecked: false },
        { name : "Bouchra MERAH",  Class: 'B', isChecked: false },
        { name : "Boudjadi Zine Eddine",  Class: 'B', isChecked: false },
        { name : "BOUKHEDIR Sameh",  Class: 'B', isChecked: false },
        { name : "Bousselloua Amani",  Class: 'B', isChecked: false },
        { name : "Cherif Tolba",  Class: 'B', isChecked: false },
        { name : "Chouichi Iskander",  Class: 'B', isChecked: false },
        { name : "Delmi Amar Aimen wassim",  Class: 'B', isChecked: false },
        { name : "Djemili",  Class: 'B', isChecked: false },
        { name : "Feriel Boukheroufa sakraoui",  Class: 'B', isChecked: false },
        { name : "Houcine meguehout ",  Class: 'B', isChecked: false },
        { name : "Layachi mohamed smail",  Class: 'B', isChecked: false },
        { name : "Meguehout houcine",  Class: 'B', isChecked: false },
        { name : "Mekhilef imed",  Class: 'B', isChecked: false },
        { name : "Merdes Afrah",  Class: 'B', isChecked: false },
        { name : "Sota imtinane minet alahh",  Class: 'B', isChecked: false },
        { name : "Telghemti Lotfi",  Class: 'B', isChecked: false },
        { name : "Abd enour betich",  Class: 'C', isChecked: false },
        { name : "Abdelmadjid Khelil",  Class: 'C', isChecked: false },
        { name : "Abdelouahab hamdi",  Class: 'C', isChecked: false },
        { name : "Abdennouri Mouatez Billah",  Class: 'C', isChecked: false },
        { name : "Abdourahamane Mohamed Azzedine",  Class: 'C', isChecked: false },
        { name : "Adjez Ines",  Class: 'C', isChecked: false },
        { name : "Ahcene bourara",  Class: 'C', isChecked: false },
        { name : "Ahlem Bara",  Class: 'C', isChecked: false },
        { name : "Aidoud Aya ",  Class: 'C', isChecked: false },
        { name : "Algma Fadoua",  Class: 'C', isChecked: false },
        { name : "Allali Takoua",  Class: 'C', isChecked: false },
        { name : "Allouch moussa",  Class: 'C', isChecked: false },
        { name : "Amani Bouasla",  Class: 'C', isChecked: false },
        { name : "Amara nadine",  Class: 'C', isChecked: false },
        { name : "Amirat maya",  Class: 'C', isChecked: false },
        { name : "Amouri Rawane",  Class: 'C', isChecked: false },
        { name : "Anis Bakouche",  Class: 'C', isChecked: false },
        { name : "Aoudia Razane",  Class: 'C', isChecked: false },
        { name : "Aoulmi Houssam Zineddine",  Class: 'C', isChecked: false },
        { name : "Araba safinez",  Class: 'C', isChecked: false },
        { name : "ARARI Mohamed Amine",  Class: 'C', isChecked: false },
        { name : "Aya Bouhemila",  Class: 'C', isChecked: false },
        { name : "Azizi Abderahim",  Class: 'C', isChecked: false },
        { name : "Bala sara",  Class: 'C', isChecked: false },
        { name : "Basli sohaib",  Class: 'C', isChecked: false },
        { name : "Benabdellatif soulef",  Class: 'C', isChecked: false },
        { name : "Benadouda lilya",  Class: 'C', isChecked: false },
        { name : "Bendjama Ines",  Class: 'C', isChecked: false },
        { name : "Benghalia yara",  Class: 'C', isChecked: false },
        { name : "Benotmane Kamelia Hesni",  Class: 'C', isChecked: false },
        { name : "Benramoul Rayene",  Class: 'C', isChecked: false },
        { name : "Benramoul serine",  Class: 'C', isChecked: false },
        { name : "BENSALEM Abderrahmane",  Class: 'C', isChecked: false },
        { name : "Bensalem Mohamed Salah",  Class: 'C', isChecked: false },
        { name : "Bentouati Mohamed Rachid",  Class: 'C', isChecked: false },
        { name : "Benyaa Ahmed Amine",  Class: 'C', isChecked: false },
        { name : "Benyaa hayem",  Class: 'C', isChecked: false },
        { name : "Berredjem nadjla",  Class: 'C', isChecked: false },
        { name : "BEZAI Chemset  el Houda",  Class: 'C', isChecked: false },
        { name : "Bilel Ramdani",  Class: 'C', isChecked: false },
        { name : "Bordj lina",  Class: 'C', isChecked: false },
        { name : "Bouadjama Abdallah",  Class: 'C', isChecked: false },
        { name : "Bouali ibtihal",  Class: 'C', isChecked: false },
        { name : "Bouasla",  Class: 'C', isChecked: false },
        { name : "Bouaziz Rayane",  Class: 'C', isChecked: false },
        { name : "Boucelgui Asma",  Class: 'C', isChecked: false },
        { name : "Bouchemma Inès",  Class: 'C', isChecked: false },
        { name : "Bougarouche imane somaya",  Class: 'C', isChecked: false },
        { name : "Boukouba Mohamed khalil",  Class: 'C', isChecked: false },
        { name : "Boumaza Malak",  Class: 'C', isChecked: false },
        { name : "Boumedyen HANFER",  Class: 'C', isChecked: false },
        { name : "Boutarfa Hind",  Class: 'C', isChecked: false },
        { name : "Boutera imene",  Class: 'C', isChecked: false },
        { name : "Bouyema Abderaouf",  Class: 'C', isChecked: false },
        { name : "Bouziane lina",  Class: 'C', isChecked: false },
        { name : "Brakchi abid",  Class: 'C', isChecked: false },
        { name : "Brinet lina",  Class: 'C', isChecked: false },
        { name : "Chahinaze Djebabla",  Class: 'C', isChecked: false },
        { name : "Chahinez djellat",  Class: 'C', isChecked: false },
        { name : "Chaib hiba",  Class: 'C', isChecked: false },
        { name : "Chalabi Hadil",  Class: 'C', isChecked: false },
        { name : "Chaou hiba",  Class: 'C', isChecked: false },
        { name : "chibou baya",  Class: 'C', isChecked: false },
        { name : "Chiheb Diaf",  Class: 'C', isChecked: false },
        { name : "Chouaib zaida",  Class: 'C', isChecked: false },
        { name : "Daas Nesma Abir",  Class: 'C', isChecked: false },
        { name : "Daif Mohammed Mouad",  Class: 'C', isChecked: false },
        { name : "Derouiche Abdelouaheb",  Class: 'C', isChecked: false },
        { name : "Djellid Meriem",  Class: 'C', isChecked: false },
        { name : "Draidi Chemseddine",  Class: 'C', isChecked: false },
        { name : "El hantes Karima",  Class: 'C', isChecked: false },
        { name : "Fadel abushahla",  Class: 'C', isChecked: false },
        { name : "Fdal Mohamed cherif",  Class: 'C', isChecked: false },
        { name : "Fekrache Hatem",  Class: 'C', isChecked: false },
        { name : "Fezzai Ahmed Dia Elhak",  Class: 'C', isChecked: false },
        { name : "Gharbi seif Islam",  Class: 'C', isChecked: false },
        { name : "Ghennai Anes Ahmed Khalil",  Class: 'C', isChecked: false },
        { name : "Gheraibia Roufaida",  Class: 'C', isChecked: false },
        { name : "Gueddoum Mohamed Adem",  Class: 'C', isChecked: false },
        { name : "GUERROUF Abdeljalil",  Class: 'C', isChecked: false },
        { name : "Hadid chakib",  Class: 'C', isChecked: false },
        { name : "Hadjer Hachelfi",  Class: 'C', isChecked: false },
        { name : "Hadjer MEZAACHE",  Class: 'C', isChecked: false },
        { name : "Haitem zouar",  Class: 'C', isChecked: false },
        { name : "Haithem yahia",  Class: 'C', isChecked: false },
        { name : "Halidou Mahamadou ",  Class: 'C', isChecked: false },
        { name : "Hamada Nouari",  Class: 'C', isChecked: false },
        { name : "Hami Amira",  Class: 'C', isChecked: false },
        { name : "Hatem Bousba",  Class: 'C', isChecked: false },
        { name : "Hebbaz Elfarouk ",  Class: 'C', isChecked: false },
        { name : "Hedadj haithem",  Class: 'C', isChecked: false },
        { name : "Hellal amel",  Class: 'C', isChecked: false },
        { name : "Henada minnat allah",  Class: 'C', isChecked: false },
        { name : "Henada rania lina ikram",  Class: 'C', isChecked: false },
        { name : "Iheb eddine oubiri",  Class: 'C', isChecked: false },
        { name : "Ikram Taibi",  Class: 'C', isChecked: false },
        { name : "Iyad Abde Elmoumène Djouad",  Class: 'C', isChecked: false },
        { name : "Kadri aya wafa",  Class: 'C', isChecked: false },
        { name : "Kaouther badache",  Class: 'C', isChecked: false },
        { name : "Karmi malek nour echames",  Class: 'C', isChecked: false },
        { name : "Khelaifia amar Mohamed ilyes",  Class: 'C', isChecked: false },
        { name : "Khemis mohammed ",  Class: 'C', isChecked: false },
        { name : "Khodja Amani",  Class: 'C', isChecked: false },
        { name : "Kihel ines ",  Class: 'C', isChecked: false },
        { name : "Lamraoui Abed el basset",  Class: 'C', isChecked: false },
        { name : "Laoubi Taki eddine",  Class: 'C', isChecked: false },
        { name : "LATRACH KACEM EL AMINE",  Class: 'C', isChecked: false },
        { name : "Lilya benadouda",  Class: 'C', isChecked: false },
        { name : "Lina djeradi",  Class: 'C', isChecked: false },
        { name : "Louai khatrache",  Class: 'C', isChecked: false },
        { name : "Loubna OTMANI",  Class: 'C', isChecked: false },
        { name : "Loubna taibi",  Class: 'C', isChecked: false },
        { name : "Lyna Allem",  Class: 'C', isChecked: false },
        { name : "Lyna Derouiche",  Class: 'C', isChecked: false },
        { name : "Makhloufi ahmed",  Class: 'C', isChecked: false },
        { name : "Marouane BOUSSAHA",  Class: 'C', isChecked: false },
        { name : "Maya Boulaloua",  Class: 'C', isChecked: false },
        { name : "Mebarki Rostoum Akram Moiz",  Class: 'C', isChecked: false },
        { name : "Medjeldi Ahmed-zakarya",  Class: 'C', isChecked: false },
        { name : "Mekid Mohamed Amine",  Class: 'C', isChecked: false },
        { name : "Menaceur moussa",  Class: 'C', isChecked: false },
        { name : "Meradi Malak",  Class: 'C', isChecked: false },
        { name : "messaadi Salah Eddine",  Class: 'C', isChecked: false },
        { name : "MESSABHIA LOKMANE",  Class: 'C', isChecked: false },
        { name : "messai iyad",  Class: 'C', isChecked: false },
        { name : "Mohamed hassani",  Class: 'C', isChecked: false },
        { name : "Mohammed Amine Kebouchi",  Class: 'C', isChecked: false },
        { name : "Mostepha imed",  Class: 'C', isChecked: false },
        { name : "Nadia Zitouni",  Class: 'C', isChecked: false },
        { name : "Naili Marwa",  Class: 'C', isChecked: false },
        { name : "Nihel Randa Kessous",  Class: 'C', isChecked: false },
        { name : "Ounnas Abed Errahmane",  Class: 'C', isChecked: false },
        { name : "Rached Hadiby",  Class: 'C', isChecked: false },
        { name : "RACHEDI Zineddine",  Class: 'C', isChecked: false },
        { name : "Radia malek Benmerabet",  Class: 'C', isChecked: false },
        { name : "ressa nizar",  Class: 'C', isChecked: false },
        { name : "Rezzaz imane",  Class: 'C', isChecked: false },
        { name : "Sabri Salah eddine",  Class: 'C', isChecked: false },
        { name : "Sahli bilel",  Class: 'C', isChecked: false },
        { name : "Saidia Manar",  Class: 'C', isChecked: false },
        { name : "Saiffi Mohamed ali zakaria",  Class: 'C', isChecked: false },
        { name : "Saifi Omar Elkhatab",  Class: 'C', isChecked: false },
        { name : "Salah Hacen Nasrallah Zaoui",  Class: 'C', isChecked: false },
        { name : "Sissaoui Abdelazziz ",  Class: 'C', isChecked: false },
        { name : "Slama abd el hak",  Class: 'C', isChecked: false },
        { name : "Slimani rami",  Class: 'C', isChecked: false },
        { name : "Smati Chems Eddine",  Class: 'C', isChecked: false },
        { name : "Soltani hadjer",  Class: 'C', isChecked: false },
        { name : "Souheil Sellami",  Class: 'C', isChecked: false },
        { name : "Soundes kohil",  Class: 'C', isChecked: false },
        { name : "TALAI Meriem",  Class: 'C', isChecked: false },
        { name : "Talha Mohamed Saber",  Class: 'C', isChecked: false },
        { name : "TAYAA Yaakoub",  Class: 'C', isChecked: false },
        { name : "Tiar Ritaj",  Class: 'C', isChecked: false },
        { name : "Touati Abderrahmane",  Class: 'C', isChecked: false },
        { name : "Toubal Ahmed-abdelkadous",  Class: 'C', isChecked: false },
        { name : "toumi imene",  Class: 'C', isChecked: false },
        { name : "Toumi Mohamed lamine",  Class: 'C', isChecked: false },
        { name : "tridi madjeda naila",  Class: 'C', isChecked: false },
        { name : "Wajdi Hammoudi",  Class: 'C', isChecked: false },
        { name : "Wissal mansouri ",  Class: 'C', isChecked: false },
        { name : "Yahia ouahmed yanis",  Class: 'C', isChecked: false },
        { name : "Ylles ines",  Class: 'C', isChecked: false },
        { name : "Youcef djeddi",  Class: 'C', isChecked: false },
        { name : "Zeroual Lazhar",  Class: 'C', isChecked: false },
        { name : "Zitouni Mohamed cherif",  Class: 'C', isChecked: false },
        { name : "غرايبية شهاب الدين",  Class: 'C', isChecked: false },
        { name : "نور وليد",  Class: 'C', isChecked: false },
        { name : "graibia chihab eldine",  Class: 'C', isChecked: false },
        { name : "noor walid",  Class: 'C', isChecked: false }
    ];
    saveData(persons);
}
persons = [
    { name : "Amel ramdane",  Class: 'A', isChecked: false },
    { name : "BALLAH Abderrahmane", Class: 'A', isChecked: false },
    { name : "Farid hadada", Class: 'A', isChecked: false },
    { name : "Ghania BOUKHATEM",  Class: 'A', isChecked: false },
    { name : "Hadjadji kawter", Class: 'A', isChecked: false },
    { name : "Hani Fatima", Class: 'A', isChecked: false },
    { name : "Rayane Bounab", Class: 'A', isChecked: false },
    { name : "Rouas Aimen", Class: 'A', isChecked: false },
    { name : "Soudjoud Boumaza", Class: 'A', isChecked: false },
    { name : "Dehane Amel", Class: 'A', isChecked: false },
    { name : "Boualem CHEBIRA", Class: 'A', isChecked: false },
    { name : "Mr manaa djamel", Class: 'A', isChecked: false },
    { name : "omar belmeguenai", Class: 'A', isChecked: false },
    { name : "Djebabla Abd Elhak", Class: 'A', isChecked: false },
    { name : "LARABA Abdelaziz", Class: 'A', isChecked: false },
    { name : "samir benmoussa", Class: 'A', isChecked: false },
    { name : "amoura kamel", Class: 'A', isChecked: false },
    { name : "Réda DJAOUAHDOU", Class: 'A', isChecked: false },
    { name : "FERIEL BOUKHEROUFA", Class: 'A', isChecked: false },
    { name : "Yazid Hadidane", Class: 'A', isChecked: false },
    { name : "abir belhouane",  Class: 'B', isChecked: false },
    { name : "Ahmed Boulemden",  Class: 'B', isChecked: false },
    { name : "Besma Boudiaf",  Class: 'B', isChecked: false },
    { name : "Bilal Dendani",  Class: 'B', isChecked: false },
    { name : "Bouchra MERAH",  Class: 'B', isChecked: false },
    { name : "Boudjadi Zine Eddine",  Class: 'B', isChecked: false },
    { name : "BOUKHEDIR Sameh",  Class: 'B', isChecked: false },
    { name : "Bousselloua Amani",  Class: 'B', isChecked: false },
    { name : "Cherif Tolba",  Class: 'B', isChecked: false },
    { name : "Chouichi Iskander",  Class: 'B', isChecked: false },
    { name : "Delmi Amar Aimen wassim",  Class: 'B', isChecked: false },
    { name : "Djemili",  Class: 'B', isChecked: false },
    { name : "Feriel Boukheroufa sakraoui",  Class: 'B', isChecked: false },
    { name : "Houcine meguehout ",  Class: 'B', isChecked: false },
    { name : "Layachi mohamed smail",  Class: 'B', isChecked: false },
    { name : "Meguehout houcine",  Class: 'B', isChecked: false },
    { name : "Mekhilef imed",  Class: 'B', isChecked: false },
    { name : "Merdes Afrah",  Class: 'B', isChecked: false },
    { name : "Sota imtinane minet alahh",  Class: 'B', isChecked: false },
    { name : "Telghemti Lotfi",  Class: 'B', isChecked: false },
    { name : "Abd enour betich",  Class: 'C', isChecked: false },
    { name : "Abdelmadjid Khelil",  Class: 'C', isChecked: false },
    { name : "Abdelouahab hamdi",  Class: 'C', isChecked: false },
    { name : "Abdennouri Mouatez Billah",  Class: 'C', isChecked: false },
    { name : "Abdourahamane Mohamed Azzedine",  Class: 'C', isChecked: false },
    { name : "Adjez Ines",  Class: 'C', isChecked: false },
    { name : "Ahcene bourara",  Class: 'C', isChecked: false },
    { name : "Ahlem Bara",  Class: 'C', isChecked: false },
    { name : "Aidoud Aya ",  Class: 'C', isChecked: false },
    { name : "Algma Fadoua",  Class: 'C', isChecked: false },
    { name : "Allali Takoua",  Class: 'C', isChecked: false },
    { name : "Allouch moussa",  Class: 'C', isChecked: false },
    { name : "Amani Bouasla",  Class: 'C', isChecked: false },
    { name : "Amara nadine",  Class: 'C', isChecked: false },
    { name : "Amirat maya",  Class: 'C', isChecked: false },
    { name : "Amouri Rawane",  Class: 'C', isChecked: false },
    { name : "Anis Bakouche",  Class: 'C', isChecked: false },
    { name : "Aoudia Razane",  Class: 'C', isChecked: false },
    { name : "Aoulmi Houssam Zineddine",  Class: 'C', isChecked: false },
    { name : "Araba safinez",  Class: 'C', isChecked: false },
    { name : "ARARI Mohamed Amine",  Class: 'C', isChecked: false },
    { name : "Aya Bouhemila",  Class: 'C', isChecked: false },
    { name : "Azizi Abderahim",  Class: 'C', isChecked: false },
    { name : "Bala sara",  Class: 'C', isChecked: false },
    { name : "Basli sohaib",  Class: 'C', isChecked: false },
    { name : "Benabdellatif soulef",  Class: 'C', isChecked: false },
    { name : "Benadouda lilya",  Class: 'C', isChecked: false },
    { name : "Bendjama Ines",  Class: 'C', isChecked: false },
    { name : "Benghalia yara",  Class: 'C', isChecked: false },
    { name : "Benotmane Kamelia Hesni",  Class: 'C', isChecked: false },
    { name : "Benramoul Rayene",  Class: 'C', isChecked: false },
    { name : "Benramoul serine",  Class: 'C', isChecked: false },
    { name : "BENSALEM Abderrahmane",  Class: 'C', isChecked: false },
    { name : "Bensalem Mohamed Salah",  Class: 'C', isChecked: false },
    { name : "Bentouati Mohamed Rachid",  Class: 'C', isChecked: false },
    { name : "Benyaa Ahmed Amine",  Class: 'C', isChecked: false },
    { name : "Benyaa hayem",  Class: 'C', isChecked: false },
    { name : "Berredjem nadjla",  Class: 'C', isChecked: false },
    { name : "BEZAI Chemset  el Houda",  Class: 'C', isChecked: false },
    { name : "Bilel Ramdani",  Class: 'C', isChecked: false },
    { name : "Bordj lina",  Class: 'C', isChecked: false },
    { name : "Bouadjama Abdallah",  Class: 'C', isChecked: false },
    { name : "Bouali ibtihal",  Class: 'C', isChecked: false },
    { name : "Bouasla",  Class: 'C', isChecked: false },
    { name : "Bouaziz Rayane",  Class: 'C', isChecked: false },
    { name : "Boucelgui Asma",  Class: 'C', isChecked: false },
    { name : "Bouchemma Inès",  Class: 'C', isChecked: false },
    { name : "Bougarouche imane somaya",  Class: 'C', isChecked: false },
    { name : "Boukouba Mohamed khalil",  Class: 'C', isChecked: false },
    { name : "Boumaza Malak",  Class: 'C', isChecked: false },
    { name : "Boumedyen HANFER",  Class: 'C', isChecked: false },
    { name : "Boutarfa Hind",  Class: 'C', isChecked: false },
    { name : "Boutera imene",  Class: 'C', isChecked: false },
    { name : "Bouyema Abderaouf",  Class: 'C', isChecked: false },
    { name : "Bouziane lina",  Class: 'C', isChecked: false },
    { name : "Brakchi abid",  Class: 'C', isChecked: false },
    { name : "Brinet lina",  Class: 'C', isChecked: false },
    { name : "Chahinaze Djebabla",  Class: 'C', isChecked: false },
    { name : "Chahinez djellat",  Class: 'C', isChecked: false },
    { name : "Chaib hiba",  Class: 'C', isChecked: false },
    { name : "Chalabi Hadil",  Class: 'C', isChecked: false },
    { name : "Chaou hiba",  Class: 'C', isChecked: false },
    { name : "chibou baya",  Class: 'C', isChecked: false },
    { name : "Chiheb Diaf",  Class: 'C', isChecked: false },
    { name : "Chouaib zaida",  Class: 'C', isChecked: false },
    { name : "Daas Nesma Abir",  Class: 'C', isChecked: false },
    { name : "Daif Mohammed Mouad",  Class: 'C', isChecked: false },
    { name : "Derouiche Abdelouaheb",  Class: 'C', isChecked: false },
    { name : "Djellid Meriem",  Class: 'C', isChecked: false },
    { name : "Draidi Chemseddine",  Class: 'C', isChecked: false },
    { name : "El hantes Karima",  Class: 'C', isChecked: false },
    { name : "Fadel abushahla",  Class: 'C', isChecked: false },
    { name : "Fdal Mohamed cherif",  Class: 'C', isChecked: false },
    { name : "Fekrache Hatem",  Class: 'C', isChecked: false },
    { name : "Fezzai Ahmed Dia Elhak",  Class: 'C', isChecked: false },
    { name : "Gharbi seif Islam",  Class: 'C', isChecked: false },
    { name : "Ghennai Anes Ahmed Khalil",  Class: 'C', isChecked: false },
    { name : "Gheraibia Roufaida",  Class: 'C', isChecked: false },
    { name : "Gueddoum Mohamed Adem",  Class: 'C', isChecked: false },
    { name : "GUERROUF Abdeljalil",  Class: 'C', isChecked: false },
    { name : "Hadid chakib",  Class: 'C', isChecked: false },
    { name : "Hadjer Hachelfi",  Class: 'C', isChecked: false },
    { name : "Hadjer MEZAACHE",  Class: 'C', isChecked: false },
    { name : "Haitem zouar",  Class: 'C', isChecked: false },
    { name : "Haithem yahia",  Class: 'C', isChecked: false },
    { name : "Halidou Mahamadou ",  Class: 'C', isChecked: false },
    { name : "Hamada Nouari",  Class: 'C', isChecked: false },
    { name : "Hami Amira",  Class: 'C', isChecked: false },
    { name : "Hatem Bousba",  Class: 'C', isChecked: false },
    { name : "Hebbaz Elfarouk ",  Class: 'C', isChecked: false },
    { name : "Hedadj haithem",  Class: 'C', isChecked: false },
    { name : "Hellal amel",  Class: 'C', isChecked: false },
    { name : "Henada minnat allah",  Class: 'C', isChecked: false },
    { name : "Henada rania lina ikram",  Class: 'C', isChecked: false },
    { name : "Iheb eddine oubiri",  Class: 'C', isChecked: false },
    { name : "Ikram Taibi",  Class: 'C', isChecked: false },
    { name : "Iyad Abde Elmoumène Djouad",  Class: 'C', isChecked: false },
    { name : "Kadri aya wafa",  Class: 'C', isChecked: false },
    { name : "Kaouther badache",  Class: 'C', isChecked: false },
    { name : "Karmi malek nour echames",  Class: 'C', isChecked: false },
    { name : "Khelaifia amar Mohamed ilyes",  Class: 'C', isChecked: false },
    { name : "Khemis mohammed ",  Class: 'C', isChecked: false },
    { name : "Khodja Amani",  Class: 'C', isChecked: false },
    { name : "Kihel ines ",  Class: 'C', isChecked: false },
    { name : "Lamraoui Abed el basset",  Class: 'C', isChecked: false },
    { name : "Laoubi Taki eddine",  Class: 'C', isChecked: false },
    { name : "LATRACH KACEM EL AMINE",  Class: 'C', isChecked: false },
    { name : "Lilya benadouda",  Class: 'C', isChecked: false },
    { name : "Lina djeradi",  Class: 'C', isChecked: false },
    { name : "Louai khatrache",  Class: 'C', isChecked: false },
    { name : "Loubna OTMANI",  Class: 'C', isChecked: false },
    { name : "Loubna taibi",  Class: 'C', isChecked: false },
    { name : "Lyna Allem",  Class: 'C', isChecked: false },
    { name : "Lyna Derouiche",  Class: 'C', isChecked: false },
    { name : "Makhloufi ahmed",  Class: 'C', isChecked: false },
    { name : "Marouane BOUSSAHA",  Class: 'C', isChecked: false },
    { name : "Maya Boulaloua",  Class: 'C', isChecked: false },
    { name : "Mebarki Rostoum Akram Moiz",  Class: 'C', isChecked: false },
    { name : "Medjeldi Ahmed-zakarya",  Class: 'C', isChecked: false },
    { name : "Mekid Mohamed Amine",  Class: 'C', isChecked: false },
    { name : "Menaceur moussa",  Class: 'C', isChecked: false },
    { name : "Meradi Malak",  Class: 'C', isChecked: false },
    { name : "messaadi Salah Eddine",  Class: 'C', isChecked: false },
    { name : "MESSABHIA LOKMANE",  Class: 'C', isChecked: false },
    { name : "messai iyad",  Class: 'C', isChecked: false },
    { name : "Mohamed hassani",  Class: 'C', isChecked: false },
    { name : "Mohammed Amine Kebouchi",  Class: 'C', isChecked: false },
    { name : "Mostepha imed",  Class: 'C', isChecked: false },
    { name : "Nadia Zitouni",  Class: 'C', isChecked: false },
    { name : "Naili Marwa",  Class: 'C', isChecked: false },
    { name : "Nihel Randa Kessous",  Class: 'C', isChecked: false },
    { name : "Ounnas Abed Errahmane",  Class: 'C', isChecked: false },
    { name : "Rached Hadiby",  Class: 'C', isChecked: false },
    { name : "RACHEDI Zineddine",  Class: 'C', isChecked: false },
    { name : "Radia malek Benmerabet",  Class: 'C', isChecked: false },
    { name : "ressa nizar",  Class: 'C', isChecked: false },
    { name : "Rezzaz imane",  Class: 'C', isChecked: false },
    { name : "Sabri Salah eddine",  Class: 'C', isChecked: false },
    { name : "Sahli bilel",  Class: 'C', isChecked: false },
    { name : "Saidia Manar",  Class: 'C', isChecked: false },
    { name : "Saiffi Mohamed ali zakaria",  Class: 'C', isChecked: false },
    { name : "Saifi Omar Elkhatab",  Class: 'C', isChecked: false },
    { name : "Salah Hacen Nasrallah Zaoui",  Class: 'C', isChecked: false },
    { name : "Sissaoui Abdelazziz ",  Class: 'C', isChecked: false },
    { name : "Slama abd el hak",  Class: 'C', isChecked: false },
    { name : "Slimani rami",  Class: 'C', isChecked: false },
    { name : "Smati Chems Eddine",  Class: 'C', isChecked: false },
    { name : "Soltani hadjer",  Class: 'C', isChecked: false },
    { name : "Souheil Sellami",  Class: 'C', isChecked: false },
    { name : "Soundes kohil",  Class: 'C', isChecked: false },
    { name : "TALAI Meriem",  Class: 'C', isChecked: false },
    { name : "Talha Mohamed Saber",  Class: 'C', isChecked: false },
    { name : "TAYAA Yaakoub",  Class: 'C', isChecked: false },
    { name : "Tiar Ritaj",  Class: 'C', isChecked: false },
    { name : "Touati Abderrahmane",  Class: 'C', isChecked: false },
    { name : "Toubal Ahmed-abdelkadous",  Class: 'C', isChecked: false },
    { name : "toumi imene",  Class: 'C', isChecked: false },
    { name : "Toumi Mohamed lamine",  Class: 'C', isChecked: false },
    { name : "tridi madjeda naila",  Class: 'C', isChecked: false },
    { name : "Wajdi Hammoudi",  Class: 'C', isChecked: false },
    { name : "Wissal mansouri ",  Class: 'C', isChecked: false },
    { name : "Yahia ouahmed yanis",  Class: 'C', isChecked: false },
    { name : "Ylles ines",  Class: 'C', isChecked: false },
    { name : "Youcef djeddi",  Class: 'C', isChecked: false },
    { name : "Zeroual Lazhar",  Class: 'C', isChecked: false },
    { name : "Zitouni Mohamed cherif",  Class: 'C', isChecked: false },
    { name : "غرايبية شهاب الدين",  Class: 'C', isChecked: false },
    { name : "نور وليد",  Class: 'C', isChecked: false },
    { name : "graibia chihab eldine",  Class: 'C', isChecked: false },
    { name : "noor walid",  Class: 'C', isChecked: false }
];



var tupleCPT = persons.length;

function ShowListPersons(persons){
    persons = getData();
    var personSection = document.getElementById("person");
    personSection.innerHTML = `<h1>Result</h1>`;
    let i = 0;
    console.log(persons);
    for(const person of persons)
    {
        const newRow = document.createElement("div");
        newRow.setAttribute("id", "row" + i);
        newRow.setAttribute("class", "row");
        if(person['isChecked'] === true)
        {
            newRow.innerHTML += `<input type="checkbox" id="check${i}" checked>`;
        }else{
            newRow.innerHTML += `<input type="checkbox" id="check${i}">`;
        }
        newRow.innerHTML += `<span id="name${i}"> ${person['name']} </span>`;
        if(person['Class'] == 'A')
        {
            newRow.innerHTML += `<span id="class${i}" class="classA"> Class ${person['Class']} </span>`;
        }else if(person['Class'] == 'B'){
            newRow.innerHTML += `<span id="class${i}" class="classB"> Class ${person['Class']} </span>`;
        }else{
            newRow.innerHTML += `<span id="class${i}" class="classC"> Class ${person['Class']} </span>`;
        }
        //newRow.innerHTML += `<br>`;
        personSection.appendChild(newRow);
        i++;
    }
    //console.log(tupleCPT, personFullName, personClass, personIsChecked);
    return personSection.innerHTML;
}
function afficherSelected(persons){
    var personSection = document.getElementById("person");
    personSection.innerHTML = `<h1>Result</h1>`;
    var searchValue = document.getElementById("searchInput").value.toLowerCase();
    var regex = new RegExp(".*"+searchValue+".*");
    let i = 0;
    for(const person of persons)
    {
        if (regex.test(person['name'].toLowerCase())){
            const newRow = document.createElement("div");
        newRow.setAttribute("id", "row" + i);
        newRow.setAttribute("class", "row");
        if(person['isChecked'] === true)
        {
            newRow.innerHTML += `<input type="checkbox" id="check${i}" checked>`;
        }else{
            newRow.innerHTML += `<input type="checkbox" id="check${i}">`;
        }
        newRow.innerHTML += `<span id="name${i}"> ${person['name']} </span>`;
        if(person['Class'] == 'A')
        {
            newRow.innerHTML += `<span id="class${i}" class="classA"> Class ${person['Class']} </span>`;
        }else if(person['Class'] == 'B'){
            newRow.innerHTML += `<span id="class${i}" class="classB"> Class ${person['Class']} </span>`;
        }else{
            newRow.innerHTML += `<span id="class${i}" class="classC"> Class ${person['Class']} </span>`;
        }
        //newRow.innerHTML += `<br>`;
        personSection.appendChild(newRow);
        }
        i++;
    }
    return personSection.innerHTML;
}
function saveData(persons)
{
    localStorage.setItem("persons", JSON.stringify(persons));
}

function getData()
{
    return JSON.parse(localStorage.getItem("persons"));
}


function checkHandler(){
    let i = 0;
    
    for(const person of persons)
    {
        var checkboxId = "check" + i;
        var checkbox = document.getElementById(checkboxId);
        if(checkbox)
        {
            checkbox.addEventListener("change", function() {
                if (this.checked) {
                    person['isChecked'] = true;
                } else {
                    person['isChecked'] = false;
                }
            });
        }
        i++;
    }
    saveData(persons);
}

setInterval(checkHandler, 500);


// main 
var inputField = document.getElementById("searchInput");
var personSection = document.getElementById("person");

ShowListPersons(persons);


// changing result section HTML
inputField.addEventListener("input", function() {

    personSection.innerHTML = afficherSelected(persons);
    
});



function help() {
    alert("Welcome!\nYou can search for persons by NAME and check.");
}
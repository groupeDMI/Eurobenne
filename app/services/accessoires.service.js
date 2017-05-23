class Accessoires {
    constructor() {
        this.accessoires = [];
    }

    getAccess(){
        const a1 = 
        {
            nom: 'Sabot d\'immobilisation',
            desc: 'Sabot d\'immobilisation de benne verrouillable',
            type: 'Accessoires',
            img: 'content/img/accessoires/sabot.JPG'
        };
        const a2 =
        {
            nom: 'Anneau de préhension',
            desc: '',
            type: 'Accessoires',
            img: 'content/img/accessoires/anneau.jpg'
        };
        const a3 =
        {
            nom: 'Cale de stockage',
            desc: 'Permet l\'inclinaison de la benne et d\'éviter la corrosion ',
            type: 'Accessoires',
            img: 'content/img/accessoires/cale.jpg'
        };
        const a4 =
        {
            nom: 'Trappes sur la porte arrière',
            desc: '',
            type: 'Accessoires',
            img: 'content/img/accessoires/trappesgrain.jpg'
        };
        this.accessoires.push(a1, a2, a3, a4);

        return this.accessoires;
    }

    accessoires() {
        return {
            getAccess: getAccess
        };
    }
}

    
angular
.module('fjs.services')
.service('accessoires', Accessoires);
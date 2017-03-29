(function(){
    'use strict';
    
    angular
    .module('fjs.services')
    .service('accessoires', accessoires);

    function accessoires(){
        function getAccess(){
            var accessoires = [];
            var a1 = 
            {
                nom: 'Sabot d\'immobilisation',
                desc: 'Sabot d\'immobilisation de benne verrouillable',
                type: 'Accessoires',
                img: 'content/img/accessoires/sabot.JPG'
            };
            var a2 =
            {
                nom: 'Anneau de préhension',
                desc: '',
                type: 'Accessoires',
                img: 'content/img/accessoires/anneau.jpg'
            };
            var a3 =
            {
                nom: 'Cale de stockage',
                desc: 'Permet l\'inclinaison de la benne et d\'éviter la corrosion ',
                type: 'Accessoires',
                img: 'content/img/accessoires/cale.jpg'
            };
            var a4 =
            {
                nom: 'Trappes sur la porte arrière',
                desc: '',
                type: 'Accessoires',
                img: 'content/img/accessoires/trappesgrain.jpg'
            };
            accessoires.push(a1, a2, a3, a4);

            return accessoires;
        }

        var Services = {
            getAccess: getAccess
        }
        return Services;
    }
})();
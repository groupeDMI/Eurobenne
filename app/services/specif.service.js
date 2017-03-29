(function(){
    'use strict';
    
    angular
    .module('fjs.services')
    .service('specif', specif);

    function specif(){
        function getSpecif(){
            var specif = [];
            var s1 = 
            {
                nom: 'Benne à boues type Eurostyl\' 15m³',
                desc: 'avec porte étanche en hayon et déflecteurs avant et arrière',
                type: 'Bennes à Boues',
                img: 'content/img/bennes/EURO15BETANCHE.JPG'
            };
            var s2 =
            {
                nom: 'Benne à boues type Eurostyl\' 15m³ + Bâchage',
                desc: 'avec porte étanche en hayon et Bâchage type "Débâche Vite Latéral "',
                type: 'Bennes à Boues',
                img: 'content/img/bennes/EURO15AR.JPG'
            };
            var s3 =
            {
                nom: 'Benne à boues type Eurostyl\' 15m³ + Bâchage',
                desc: 'avec porte étanche en hayon et Bâchage type "Débâche Vite Latéral "',
                type: 'Bennes à Boues',
                img: 'content/img/bennes/EURO15AV.JPG'
            };
            specif.push(s1, s2, s3);

            return specif;
        }

        function getCategories(){
            var categories = [
                'Bennes à Boues',
                'Bennes à Copeaux',
                'Bennes Emboitables',
                'Bennes à Ferailles',
                'Berces & Berces Porte-Grue',
                'Cadres Files Rabattables',
                'Bennes Spéciales',
                'Bennes Spéciales TP',
                'Multibennes'
            ];
            return categories
        }

        var Services = {
            getSpecif: getSpecif,
            getCategories: getCategories
        }
        return Services;
    }
})();
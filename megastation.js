 class funda {

    /**
     * Constructor
     * @param {*} modelo modelo de la funda
     * @param {*} marca marca de la funda
     * @param {*} precio precio de la funda
     */
        constructor (modelo,marca,precio){
    
            this.modelo = modelo ;
            this.marca = marca ;
            this.precio = precio;
            this.id = -1;
        }
    
        mostrar_descripcion(){
            return (this.id + " - " +this.modelo + " - " + this.marca + " - $" + this.precio) ;
        }
    
        /**
         * Setea un nuevo id
         * @param {*} nuevo_id  el nuevo id a setear
         */
        set_id(nuevo_id){
    
            this.id = nuevo_id ;
        }
    
    }
import Querys from '@models/Querys';

interface contratos {
    uid: String;
    description: String;
    uri: String;
}

export default class Contratos{
    private contratos: contratos;
    constructor(contratos?: contratos){
        this.contratos = contratos;
    }

    private query = new Querys('contratos');

    public async getContratos(){
        
            const response = await this.query.getItems();
            if (response){
                const contrats =[];
                response.forEach(contratos =>{
                    contrats.push(contratos.data());
                });
                console.log(contrats);
                return contrats;
            }
    }

    public async deletedContratos(_uid: string){
        try {
			await this.query.deletedItem(_uid);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
    }

    public async setContratos(data?: contratos){
        try{
            const uid = await this.query.addItem(data || this.contratos);
            await this.query.setItemsUid(uid.id, '_uid');
            return uid.id;
        }catch(error){
            console.log(error);
			return false;
        }
    }
}
export interface Deserializable {
    deserialize(input: any): this;
}

export class Pet implements Deserializable{

    private id: number;
    private name: string;
    private kind: string;
    private weight: number;
    private height: number;
    private length: number;
    private photo_url: string;
    private description: string;
    private number_of_lives: number;

    constructor() {}

    public deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    public getId() {
        return this.id;
    }

    public getPetName() {
        return this.name;
    }

    public getPetKind() {
        return this.kind;
    }

    public getPetWeight() {
        return this.weight;
    }

    public getPetHeight() {
        return this.height;
    }

    public getPetLength() {
        return this.length;
    }

    public getPetPhotoUrl() {
        return this.photo_url;
    }

    public getDescription() {
        return this.description;
    }

}

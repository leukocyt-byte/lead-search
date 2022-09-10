import { LightningElement, track } from 'lwc';

export default class LeadList extends LightningElement {
    @track leads = [];
    @track searchTerm;

    handleSearchTermChange(event) {
        this.searchTerm = event.target.value;
        const selectedEvent = new CustomEvent('newsearch', {detail: this.searchTerm});
        this.dispatchEvent(selectedEvent);
    }

    leads = [
        {
            "Id": "Lead1",
            "Name": "Jane Doe",
            "Title": "Director",
            "Company": "LWC Holdings",
            "Street": "Madison Avenue",
            "City": "Toronto",
            "PostalCode": "11424"
        },
        {
            "Id": "Lead2",
            "Name": "Aaron Corpovsky",
            "Title": "VP",
            "Company": "Shoping Inc",
            "Street": "Main Square",
            "City": "New York",
            "PostalCode": "67543"
        },
        {
            "Id": "Lead3",
            "Name": "James Smith",
            "Title": "CEO",
            "Company": "Banana Business",
            "Street": "Steep",
            "City": "Washington",
            "PostalCode": "32045"
        }
    ]
}
import { LightningElement, track, wire } from 'lwc';
import searchLeads from '@salesforce/apex.LeadSearchController.searchLeads';

const COLS = [
    {
        label: 'Name',
        fieldName: 'Name',
        type: 'text'
    },
    {
        label: 'Title',
        fieldName: 'Title',
        type: 'text'
    },
    {
        label: 'Company',
        fieldName: 'Company',
        type: 'text'
    },
    {
        label: 'View',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            title: 'View Details',
            alternativeText: 'View Details',
            iconName: 'action:info'
        }
    }
];
export default class LeadList extends LightningElement {
    @track leads = [];
    @track searchTerm;
    @track cols = COLS;
    @track error;

    @wire(searchLeads, { searchTerm: '$searchTerm'})
    loadLeads( {error, data } ) {
        if (data) {
            this.leads = data;
            this.error = undefined;

        } else if (error) {
            this.error = error;
            this.leads = undefined;
        }
    }
    handleSearchTermChange(event) {
        this.searchTerm = event.target.value;
        const selectedEvent = new CustomEvent('newsearch', {detail: this.searchTerm});
        this.dispatchEvent(selectedEvent);
    }

    // leads = [
    //     {
    //         "Id": "Lead1",
    //         "Name": "Jane Doe",
    //         "Title": "Director",
    //         "Company": "LWC Holdings",
    //         "Street": "Madison Avenue",
    //         "City": "Toronto",
    //         "PostalCode": "11424"
    //     },
    //     {
    //         "Id": "Lead2",
    //         "Name": "Aaron Corpovsky",
    //         "Title": "VP",
    //         "Company": "Shoping Inc",
    //         "Street": "Main Square",
    //         "City": "New York",
    //         "PostalCode": "67543"
    //     },
    //     {
    //         "Id": "Lead3",
    //         "Name": "James Smith",
    //         "Title": "CEO",
    //         "Company": "Banana Business",
    //         "Street": "Steep",
    //         "City": "Washington",
    //         "PostalCode": "32045"
    //     }
    // ];
}
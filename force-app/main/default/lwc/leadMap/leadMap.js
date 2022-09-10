import { LightningElement, track, wire } from 'lwc';
import searchLeads from '@salesforce/apex/LeadSearchController.searchLeads';

export default class LeadMap extends LightningElement {
    @track markers = [];
    @track error;
    @track leads = [];
    @track searchTerm;

    @wire(searchLeads, {
        searchTerm: '$searchterm'
    })
    loadLeads({ error, data }) {
        if (data) {
            this.markers = [];
            this.leads = data;
            this.markers = data.map(lead => {
                return {
                    location: {
                        Street: lead.Street,
                        State: lead.State,
                        City: lead.City,
                        PostalCode: lead.PostalCode
                    },
                    title: lead.Name,
                    description: {
                        Company: lead.Company
                    },
                    icon: 'utility:pinned'
                }
            })
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
    }
}
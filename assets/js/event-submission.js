EventSubmission= function () {    /// <summary>Constructor function of the event EventSubmission class.</summary>    /// <returns type="EventSubmission" />             return {        	    ///<summary>        ///Initializes the event submission.         ///</summary>             ///<returns type="initialization settings" />           /// <since>1.0.0</since>         init: function()         {						   Common.logInfo("EventSubmission.init...");   			   jQuery('body').on( 'click', '.event-manager-remove-uploaded-file', function() 			   {			       jQuery(this).closest( '.event-manager-uploaded-file' ).remove();				    return false;					   });			   				if( jQuery('input[data-picker="datepicker"]').length > 0 ){					jQuery('input[data-picker="datepicker"]').datepicker({minDate : 0,dateFormat : 'yy-mm-dd'});				}			                   //EventSubmission.timeFormatSettings();				  								     if(jQuery( "#event_start_date" ).length > 0)				     {        				jQuery('input#event_start_date').datepicker({        					minDate 	: 0,        					dateFormat 	: 'yy-mm-dd',        				}); 				     }								     if(jQuery( "#event_end_date" ).length > 0)				     {        				jQuery('input#event_end_date').datepicker({        									 dateFormat 	: 'yy-mm-dd',											 beforeShow: function(input, inst) {											       var mindate = jQuery('input#event_start_date').datepicker('getDate');											       jQuery(this).datepicker('option', 'minDate', mindate);											   }        				}).on('change', function(){                            // set the "event_start_date" end to not be later than "event_end_date" starts:                           //jQuery('#event_start_date').datepicker('minDate', new Date(jQuery(this).val()));                        });				     }								if(jQuery( "#event_registration_deadline" ).length > 0)				{					jQuery('input#event_registration_deadline').datepicker({							format : 'yy-mm-dd',							autoclose : true,							todayHighlight: true  					});			    }													//initially hide address, pincode, location textbox.				if (jQuery('#event_online').length > 0)	          		{				        //hide event venue name, address, location and pincode fields at the edit event when select online event            	 			if(jQuery('input[name=event_online]:checked').val()=='yes')			 		    {			 		        			 		               if (jQuery('.fieldset-event_venue_name').length > 0 && jQuery('input[name=event_venue_name]').length > 0) {			                            jQuery('input[name=event_venue_name]').removeAttr('required', 'required');			                            jQuery('.fieldset-event_venue_name').hide();			                        }					 	           if (jQuery('.fieldset-event_address').length > 0 && jQuery('input[name=event_address]').length > 0) {			                            jQuery('input[name=event_address]').removeAttr('required', 'required');			                            jQuery('.fieldset-event_address').hide();			                        }			                        if (jQuery('.fieldset-event_pincode').length > 0 && jQuery('input[name=event_pincode]').length > 0) {			                            jQuery('input[name=event_pincode]').removeAttr('required', 'required');			                            jQuery('.fieldset-event_pincode').hide();			                        }			                        if (jQuery('.fieldset-event_location').length > 0 && jQuery('input[name=event_location]').length > 0) {			                            jQuery('input[name=event_location]').removeAttr('required', 'required');			                            jQuery('.fieldset-event_location').hide();			                        }					 }				}				//initially hide ticket price textbox				if (jQuery('#event_ticket_price').length > 0 && jQuery('#event_ticket_price :checked').val() == 'free')	            {	                jQuery('input[name=event_ticket_price]').removeAttr('required', 'required');				    jQuery('.fieldset-event_ticket_price').hide();				}				jQuery('input[name=event_online]').on('change', EventSubmission.actions.onlineEvent);				jQuery('input[name=event_ticket_options]').on('change', EventSubmission.actions.eventTicketOptions);	},		actions:	{	    	      				/// <summary>				/// Hide address,location and pincode filed when online event.     				/// </summary>       				/// <returns type="initialization settings" />   				/// <since>1.0.0</since> 	            onlineEvent: function(event) 	            {	                event.preventDefault(); 	                Common.logInfo("EventDashboard.actions.onlineEvent...");	                if (jQuery('#event_online').length > 0)	                {	                    if (jQuery(this).val() == "yes") 	                    {	                        if (jQuery('.fieldset-event_venue_name').length > 0 && jQuery('input[name=event_venue_name]').length > 0) {	                            jQuery('input[name=event_venue_name]').removeAttr('required', 'required');	                            jQuery('.fieldset-event_venue_name').hide();	                        }	                        if (jQuery('.fieldset-event_address').length > 0 && jQuery('input[name=event_address]').length > 0) {	                            jQuery('input[name=event_address]').removeAttr('required', 'required');	                            jQuery('.fieldset-event_address').hide();	                        }	                        if (jQuery('.fieldset-event_pincode').length > 0 && jQuery('input[name=event_pincode]').length > 0) {	                            jQuery('input[name=event_pincode]').removeAttr('required', 'required');	                            jQuery('.fieldset-event_pincode').hide();	                        }	                        if (jQuery('.fieldset-event_location').length > 0 && jQuery('input[name=event_location]').length > 0) {	                            jQuery('input[name=event_location]').removeAttr('required', 'required');	                            jQuery('.fieldset-event_location').hide();	                        }	                    }	                    else {                            if (jQuery('.fieldset-event_venue_name').length > 0 && jQuery('input[name=event_venue_name]').length > 0) {	                            jQuery('input[name=event_venue_name]').attr('required', 'required');	                            jQuery('.fieldset-event_venue_name').show();	                        }	                        if (jQuery('.fieldset-event_address').length > 0 && jQuery('input[name=event_address]').length > 0) {	                            jQuery('input[name=event_address]').attr('required', 'required');	                            jQuery('.fieldset-event_address').show();	                        }	                        if (jQuery('.fieldset-event_pincode').length > 0 && jQuery('input[name=event_pincode]').length > 0) {	                            jQuery('input[name=event_pincode]').attr('required', 'required');	                            jQuery('.fieldset-event_pincode').show();	                        }	                        if (jQuery('.fieldset-event_location').length > 0 && jQuery('input[name=event_location]').length > 0) {	                            jQuery('input[name=event_location]').attr('required', 'required');	                            jQuery('.fieldset-event_location').show();	                        }	                    }	                }						  	            },	            /// <summary>	            /// Show and Hide ticket price textbox. 	            /// </summary>     	            /// <returns type="initialization ticket price settings" />    	            /// <since>1.0.0</since>     	            eventTicketOptions: function (event)	            {	                	                 event.preventDefault();	                 Common.logInfo("EventDashboard.actions.eventTicketOptions...");	                if (jQuery('#event_ticket_options').length > 0)	                {	                    	                    if (jQuery(this).val() == "free") {	                         if (jQuery('.fieldset-event_ticket_price').length > 0 && jQuery('input[name=event_ticket_price]').length > 0) 	                        {	                            jQuery('input[name=event_ticket_price]').removeAttr('required', 'required');	                            jQuery('.fieldset-event_ticket_price').hide();	                        }	                        	                    } else {	                         if (jQuery('.fieldset-event_ticket_price').length > 0 && jQuery('input[name=event_ticket_price]').length > 0) 	                            jQuery('input[name=event_ticket_price]').attr('required', 'required');	                            jQuery('.fieldset-event_ticket_price').show();	                        }	                    }	             },	             	       } //end of action	           	     			     } //enf of return	}; //end of classEventSubmission= EventSubmission();jQuery(document).ready(function($) {   EventSubmission.init();});
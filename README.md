# FRONT-END FOR CRM
## Lead Feture:
    -View Leads page: List all leads in the database with filters by name, source, status (SelectList in ASP.NET MVC)
    - Show lead status in red if it is “Do not call”. (Done)
    - Allow paging using query string. (Done)
    - Allow users to click on the lead name. This will redirect the users to the Edit Lead page. (Done)

## Staging Report:
    - This report will display the number of leads by each lead status. (Done)
    - Allow users to filter leads by created date range. (Done)

## Background Job:
    - Write a background job run daily. (Done)
    - This job is to change leads with status “Do not call” created in the previous month to status “Archived”. (Done)

## Acceptance Criteria:
    - Design database and use Entity Framework for “Leads Features”. (Done)
    - All features working fine without bugs. 
    -Implement list and update lead info page by ASP.NET MVC.  Prefer to use any client lib/framework ( VueJs, ReactJs, Angular 2+ ) instead of ASP.NET MVC. You can implement an api and client app separately. (Done)
    - You can provide stored procedure(s) for the report(s);  UI implementation to render the report(s) is/are not required. (Done)
    - You can use any css frameworks (i.e tailwindcss, getboostrap.com, bulma.io, etc.) (Done)
    - You have to push your code to any git repository and share with thoai@ermsystem.com (Done)




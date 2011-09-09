MonkTouch version 2.0
Built with Sencha Touch 1.1
by Adam Randlett - adam@mokdevelopment.com


MonkTouch is a mobile application developed for the Ekklesia360 CMS.  http://www.ekklesia360.com

## SETUP 

The setup.js file located in the 'app' folder is the file to add application tabs and asign the module to populate that content pane along with the content layout templates. 

### MonkMobile.templates
>These templates are the html with api reference to use in the display panels. HTML is allowed and is pre-styled.  

### Module Variables 
#### Sermons/Articles

| __Name__              | __Usage__     | __Description__                                                                  |
| --------------------- | ------------- | -------------------------------------------------------------------------------- |
| Title                 | {title}       | Title of sermon/article record                                                   |
| Image                 | {image}       | Image of sermon/article record                                                   |
| Preview               | {preview}     | Preview of sermon/article text (200 characters)                                  |
| Author                | {author}      | Author name of sermon/article                                                    |
| Date                  | {date}        | Date of sermon/article in format (Jan 01 2011)                                   |
| Text                  | {text}        | Summary field of sermon - Article's full content text                            |
| Slug                  | {slug}        | Slug format of sermon/article name (sermon-name-slug)                            |
| Audio                 | {audio}       | Audio url of sermon/article                                                      |
| Video                 | {video}       | Video url of sermon/article                                                      |
| Embed                 | {embed}       | Embed code of sermon/article (Vimeo or Youtube) *must use iframe embed code      |
| Thumb                 | {thmb}        | Thumbnail image of sermon/article (size 50 x 50)                                 | 

#### Events

| __Name__              | __Usage__     | __Description__                                                                  |
| --------------------- | ------------- | -------------------------------------------------------------------------------- |
| Title                 | {title}       | Title of event record                                                            |
| Image                 | {image}       | Image of event record                                                            |
| Preview               | {preview}     | Preview of event text (200 characters)                                           |
| Text                  | {text}        | Full text of event content                                                       | 
| Name                  | {name}        | Name of event coordinator                                                        |
| Email                 | {email}       | Email of event coordinator                                                       |
| Phone                 | {phone}       | Phone number of event coordinator                                                |
| Start Date            | {startDate}   | Start Date of event in format (Jan 01 2011)                                      |
| Date Month            | {month}       | Month of event in format (Jan)                                                   |
| Date Day              | {day}         | Day of event in format (01)                                                      |
| Date End              | {end}         | End Date of event in format (Jan 01 2011)                                        |
| Times                 | {times}       | Full date and time of event in format (Jan 01 2011 10:30am - Jan 14 2011 5:00pm )|
| Location Name         | {locname}     | Location name of the event                                                       |
| Location Address      | {address}     | Location Address of the event                                                    |
| Google Map            | {googlemap}   | Google map of location                                                           | 
| Slug                  | {slug}        | Slug format of sermon name (event-name-slug)                                     | 

#### Blogs

| __Name__              | __Usage__     | __Description__                                                                  |
| --------------------- | ------------- | -------------------------------------------------------------------------------- |
| Title                 | {title}       | Title of blog record                                                             |
| Image                 | {image}       | Image of blog record                                                             |
| Preview               | {preview}     | Preview of blog text (200 characters)                                            |
| Summary               | {summary}     | Summary of blog (200 characters)                                                 |
| Author                | {author}      | Author name of blog                                                              |
| Date                  | {date}        | Date of bloge in format (Jan 01 2011)                                            |
| Text                  | {text}        | Blog full text                                                                   |
| Slug                  | {slug}        | Slug format of blog name (blog-name-slug)                                        | 

#### Link List

| __Name__              | __Usage__     | __Description__                                                                  |
| --------------------- | ------------- | -------------------------------------------------------------------------------- |
| Title                 | {title}       | Title of list record                                                             |
| Image                 | {image}       | Image of list record                                                             |
| Url                   | {url}         | List item url                                                                    |
| Text                  | {text}        | Content from description field                                                   |
| Slug                  | {slug}        | Slug format of link name (link-name-slug)                                        |





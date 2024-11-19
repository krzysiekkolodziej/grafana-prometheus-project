
`` IMPORTANT ``
Remember to modify conf/httpd.conf:

<Location "/server-status">
    SetHandler server-status
    Require host example.com
</Location>

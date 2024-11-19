## Configuring `httpd.conf` in the `apache_exporter` Container

To enable and configure `server-status` for the Apache server in the `apache_exporter` container, follow these steps:

1. **Access the container**:
   Run the following command to enter the `apache_exporter` container:
   ```bash
   docker exec -it <container_id> /bin/sh
   ```

2. **edit httpd.conf**:
   Edit the `httpd.conf` file: Use nano to edit the configuration file:
   ```bash
   nano conf/httpd.conf
   ```

3. **Add lines**:
   ```bash
   ServerName localhost
   ExtendedStatus On
   <Location "/server-status">
      SetHandler server-status
      Require host example.com
   </Location>
   ```

4. **Restart apache**:
   Run the following command:
   ```bash
   apachectl restart
   ```

{ pkgs, ... }:

{
  # Defines a preview for your application.
  previews = [{
      # The command to start your web server.
      # This example starts a simple Python server on port 8080.
      command = "python3 -m http.server 8080";

      # The port your server is listening on.
      port = 8080;
  }];
}

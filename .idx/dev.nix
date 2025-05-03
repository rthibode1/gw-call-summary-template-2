{ pkgs, ... }: {
  channel = "stable-24.05";

  # Packages for development
  packages = [
    pkgs.nodejs_20
    pkgs.nodePackages.firebase-tools
    pkgs.git
    pkgs.nodePackages.nodemon
    pkgs.jq
  ];

  # Environment variables
  env = {
    NODE_ENV = "development";
  };

  # IDE extensions and workspace settings
  idx = {
    extensions = [
      "esbenp.prettier-vscode"
      "dbaeumer.vscode-eslint"
    ];

    previews.enable = true;

    workspace = {
      onCreate = {
        installDeps = "cd functions && [ -f package.json ] && npm install || echo 'No package.json found.'";
        default.openFiles = [ "README.md" "functions/index.js" ".env.example" ];
      };
      onStart = {
        startEmulator = "firebase emulators:start";
      };
    };
  };
}

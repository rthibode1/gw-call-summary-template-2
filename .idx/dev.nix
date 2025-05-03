# .idx/dev.nix
{ pkgs, ... }: {
  channel = "stable-24.05";

  packages = [
    pkgs.nodejs_20
    pkgs.nodePackages.firebase-tools
    pkgs.git
  ];

  env = {
    NODE_ENV = "development";
  };

  idx = {
    extensions = [
      "esbenp.prettier-vscode"
      "dbaeumer.vscode-eslint"
    ];

    previews.enable = true;

    workspace = {
      onCreate = {
        installDeps = "cd functions && npm install";
        default.openFiles = [ "README.md" "functions/index.js" ];
      };
      onStart = {
        startEmulator = "firebase emulators:start";
      };
    };
  };
}

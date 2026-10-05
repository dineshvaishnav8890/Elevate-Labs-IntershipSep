terraform {
  required_version = ">= 1.5.0"

  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

# Pull the nginx Alpine image from Docker Hub
resource "docker_image" "nginx" {
  name         = "nginx:alpine"
  keep_locally = true
}

# Create the Docker container
resource "docker_container" "nginx" {
  name  = "terraform-nginx"
  image = docker_image.nginx.image_id

  ports {
    internal = 80
    external = 8080
  }

  restart = "unless-stopped"
}

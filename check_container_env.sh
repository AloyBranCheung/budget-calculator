docker inspect client --format "{{.Config.Env}}"
docker inspect api --format "{{.Config.Env}}"
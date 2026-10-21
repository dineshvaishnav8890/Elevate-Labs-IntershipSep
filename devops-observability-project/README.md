Complete Observability System — DevOps Project
A containerized observability demo that brings together metrics, logs, and distributed tracing for a Node.js application using Docker Compose, Prometheus, Grafana, Loki, Promtail, and Jaeger.
> \*\*Project status:\*\* The screenshots supplied with this project show the Docker Compose stack starting successfully, the demo application responding, the `/health` endpoint returning `status: up`, a Prometheus metric graph, and the `/metrics` endpoint exposing process metrics. Log and trace collection should be verified in Grafana/Jaeger before describing the full pipeline as end-to-end validated.
Screenshots
1. Start the stack with Docker Compose
![Docker Compose build and startup]
2. Check running containers
![Docker Compose services]
3. Application health and home endpoint
![Health endpoint and application endpoint]
4. Prometheus metric query
![Prometheus demo_http_requests_total graph]
5. Metrics endpoint and success route
![Application metrics and success endpoint]
Why this project?
When an application behaves unexpectedly, teams need to answer three different questions:
Metrics: Is the service healthy, and how is it performing over time?
Logs: What happened, and what details explain an error?
Traces: Which services or operations contributed to a slow or failed request?
This project demonstrates a local, Docker-based foundation for exploring those signals in one observability workflow.
Architecture
```text
                    ┌────────────────────────────┐
                    │       Node.js Demo App     │
                    │ /health  /metrics  APIs    │
                    └─────────────┬──────────────┘
                                  │
             ┌────────────────────┼─────────────────────┐
             │                    │                     │
         Metrics                Logs                  Traces
             │                    │                     │
       ┌─────▼─────┐        ┌─────▼─────┐        ┌──────▼─────┐
       │Prometheus │        │ Promtail  │        │   Jaeger   │
       │ :9090     │        │           │        │  :16686    │
       └─────┬─────┘        └─────┬─────┘        └────────────┘
             │                    │
             │              ┌─────▼─────┐
             │              │   Loki    │
             │              │  :3100    │
             │              └─────┬─────┘
             └──────────────┬─────┘
                            ▼
                      ┌───────────┐
                      │  Grafana  │
                      │   :3001   │
                      └───────────┘
```
The diagram shows the intended signal flow. Confirm that Grafana data sources, log shipping, and application trace instrumentation are configured correctly in your local files.
Technology stack
Component	Purpose	Typical local URL
Node.js demo app	Sample service, health/API endpoints, application metrics	http://localhost:3000
Prometheus	Scrapes and queries time-series metrics	http://localhost:9090
Grafana	Dashboards and exploration for connected data sources	http://localhost:3001
Loki	Log storage and query API	http://localhost:3100
Promtail	Reads and ships logs to Loki	Usually no browser UI
Jaeger	Distributed trace UI	http://localhost:16686
Docker Compose	Builds and runs the stack together	CLI
> The supplied `docker compose ps` screenshot shows Grafana mapped to host port \*\*3001\*\*, Prometheus to \*\*9090\*\*, Loki to \*\*3100\*\*, Jaeger UI to \*\*16686\*\*, and the app to \*\*3000\*\*. Check `docker-compose.yml` if your port mappings differ.
Features demonstrated
Multi-container local environment managed by Docker Compose.
Node.js application health check at `/health`.
Application endpoint inventory displayed at `/`.
Prometheus-compatible metrics endpoint at `/metrics`.
Example success endpoint at `/api/success`.
Example error endpoint at `/api/error-demo` (use only for controlled testing).
Prometheus query for `demo\_http\_requests\_total`.
Logging and tracing components included in the stack for observability practice.
Quick start
Prerequisites
Docker Desktop (or Docker Engine) with the Compose plugin.
Git, if cloning from a repository.
Ports `3000`, `3001`, `3100`, `4318`, `9090`, and `16686` available, depending on the Compose configuration.
Run the project
From the project root:
```bash
docker compose up --build -d
docker compose ps
```
View logs if a service does not start:
```bash
docker compose logs --tail=100
docker compose logs -f app
docker compose logs -f prometheus grafana loki promtail jaeger
```
Stop the stack:
```bash
docker compose down
```
To remove Compose-managed volumes as well (this may delete stored local data):
```bash
docker compose down -v
```
Open the services
Application: http://localhost:3000
Health: http://localhost:3000/health
Metrics: http://localhost:3000/metrics
Success demo: http://localhost:3000/api/success
Error demo: http://localhost:3000/api/error-demo
Prometheus: http://localhost:9090
Grafana: http://localhost:3001
Jaeger: http://localhost:16686
Loki API: http://localhost:3100
Validate each signal
1. Application health
Open `http://localhost:3000/health`. The supplied screenshot returns `status: "up"`.
2. Generate traffic
Open the app and call the demo endpoint a few times:
```bash
curl http://localhost:3000/api/success
curl http://localhost:3000/api/success
```
On Windows PowerShell, you can use `Invoke-RestMethod` or open the URL in your browser.
3. Query Prometheus
Open http://localhost:9090 and try:
```promql
demo\_http\_requests\_total
```
For request rate, if the metric is a counter and has enough samples:
```promql
rate(demo\_http\_requests\_total\[5m])
```
Check Status → Targets in Prometheus and confirm the app target is `UP`. Metric names depend on the app's instrumentation.
4. Check logs in Grafana
Open Grafana at http://localhost:3001. Confirm that a Loki data source is configured, then use Explore to query logs. The exact LogQL selector depends on labels configured in Promtail/Loki; for example, `{job="varlogs"}` only works if that label exists.
5. Check traces in Jaeger
Open http://localhost:16686 and search for the demo service over a recent time range. Generate new requests first. If no traces appear, verify that the app is instrumented to create spans and exports them to the configured Jaeger/OpenTelemetry endpoint. A running Jaeger container alone does not prove that traces are being sent.
Repository layout
```text
devops-observability-project/
├── README.md
├── app/
├── docker-compose.yml
├── grafana/
├── loki/
├── prometheus/
└── promtail/
```
This layout is based on the visible project directory. Exact configuration filenames may vary.
Troubleshooting
A service is not running: `docker compose ps` and `docker compose logs <service>`.
App page works but Prometheus has no data: Check Prometheus targets, scrape configuration, and container-to-container hostnames. Inside Compose, use the service name rather than `localhost` to reach another container.
Grafana has no logs: Verify Promtail file mounts/permissions, scrape configuration, Loki URL, and the data source.
Jaeger has no traces: Confirm application tracing instrumentation, exporter endpoint, and protocol/port compatibility.
Port already in use: Change the host-side port mapping in `docker-compose.yml`, then restart the stack.
Configuration changes do not appear: Run `docker compose up --build -d` and inspect service logs.
Security and production notes
This is a local learning/demo setup. Before exposing it outside your machine, add authentication and network restrictions, avoid publishing internal ports unnecessarily, manage secrets securely, and configure retention, resource limits, and persistent storage. Do not send real credentials or sensitive data to demo logs.
Suggested next improvements
Add a Grafana dashboard for request rate, error rate, latency, and resource usage.
Add alert rules and an Alertmanager notification route.
Add request IDs and structured JSON logs.
Verify end-to-end trace propagation and link traces to logs where supported.
Add a load-test script and document expected results.
Add health checks and restart/resource policies to Compose services.
Demo checklist
[ ] `docker compose ps` shows all expected services as running.
[ ] `/health` responds successfully.
[ ] `/metrics` includes application metrics.
[ ] Prometheus target is `UP` and `demo\_http\_requests\_total` returns data.
[ ] Grafana can query Loki logs.
[ ] Jaeger displays traces generated by the demo app.
[ ] Screenshots and commands match the current repository configuration.
---
Project: Complete Observability System  
Focus: DevOps • Containers • Metrics • Logs • Distributed Tracing

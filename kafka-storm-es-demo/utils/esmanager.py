from elasticsearch import Elasticsearch


class EsUtils:
    def createEs(self):
        self.es_servers = [{
            "host": "10.100.81.151",
            "port": "9200"
        }]
        return Elasticsearch(self.es_servers)

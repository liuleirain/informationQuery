from rest_framework import viewsets
from .serializers import ComputerSerializer
from .models import Computer


class ComputerViewSet(viewsets.ModelViewSet):
    queryset = Computer.objects.all()
    serializer_class = ComputerSerializer

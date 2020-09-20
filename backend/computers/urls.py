from rest_framework import routers
from rest_framework import urlpatterns
from .api import ComputerViewSet

router = routers.DefaultRouter()
router.register('', ComputerViewSet, basename='computer')

urlpatterns = router.urls

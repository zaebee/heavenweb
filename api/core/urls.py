# core/urls.py
from django.urls import path, include, url
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter
from .views import RecipeViewSet

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path("^api/", include(router.urls)),
    url(r'^api-token-auth/', obtain_jwt_token),
]

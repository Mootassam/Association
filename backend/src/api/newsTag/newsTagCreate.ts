import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import NewsTagService from '../../services/newsTagService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.newsTagCreate,
    );

    const payload = await new NewsTagService(req).create(
      req.body.data,
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};